import { read, readOne, readWithOptions } from '@/server/controller/qa.controller.js'
import { readTags } from '@/server/services/tag.service.js'


export const readOneQaWithPopulateService = async (filter) => await readOne(filter, { path: 'tags', select: 'name' });

export const readQaService = async () => await read({});

const read_service = async (filter, populate) => {
  return await read(filter, populate)
}
// export const readOne = async () => {
//     return
// }
// export const create = async () => {
//     return
// }
// export const del = async () => {
//     return
// }
export const relatedQues = async (qCurrent) => {
  try {
    let res = []
    let questions = await readWithOptions({ tags: { $in: qCurrent.tags || [] } }, null, { path: 'tags', select: 'name' }, 'question answer tags img isSensitive')
    questions = questions.filter(q => String(q._id) !== String(qCurrent._id))
    //title אם יש 
    if (qCurrent?.title && questions.length) {
      function getWords(str) {
        return str.split(/\s+/);
      }
      // פונקציה לספירת המילים ממחרוזת המטרה בתוך כל מחרוזת לבדיקה
      function countWordAppearancesInStrings(targetString, stringsToCheck) {
        let targetWords = getWords(targetString);
        let results = [];
        stringsToCheck.forEach(qa => {
          let words = getWords(qa.question);
          let count = 0;
          words.forEach(word => {
            if (targetWords.includes(word)) {
              count++;
            }
          });
          results.push({ ques: qa, count: count });
        });
        // מיון המחרוזות לפי מספר ההופעות בסדר יורד
        results.sort((a, b) => b.count - a.count);
        results = results.map(q => q.ques).slice(0, 3)
        return results;
      }
      res = countWordAppearancesInStrings(qCurrent.title, questions)
    }
    //title אם אין 
    else if (!qCurrent.title && questions.length > 3) {
      let random = Math.round(Math.random() * questions.length)
      while (random >= questions.length - 3) {
        random = Math.round(Math.random() * questions.length)
      }
      res = questions.slice(random, random + 3)
    }
    // אם אין 3 שאלות
    if (res.length < 3) {
      const tags = await readTags({ _id: { $in: qCurrent.tags } }, "children")
      let childrens = []
      tags.map(t => childrens.push(...t.children))
      console.log(childrens);
      const q = await read({ tags: { $in: childrens } }, "tags")
      // console.log(q);
      res = q.slice(0, 3)
    }
    return res
  } catch (error) {
    console.log(error.message);
    return []
  }
}
