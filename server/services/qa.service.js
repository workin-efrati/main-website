import { read, readOne } from '@/server/controller/qa.controller.js'
import { readTags } from '@/server/services/tag.service.js'


export const readOneQaService = async (filter) => await readOne(filter)

export const readQaService = () => async () => await read()

const read_service = async (filter) => {
  return await read(filter)
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
  let res = []
  let questions = await read_service({ tags: { $in: qCurrent.tags } })
  questions = questions.filter(q => String(q._id) !== String(qCurrent._id))
  
  
  //title אם יש 
  
  if (qCurrent?.title && questions.length) {

    // questions = questions.filter(q => q.title?false:true)
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
  else if (!qCurrent.title) {
    let random = Math.round(Math.random()*questions.length)
    while(random >= questions.length -3){
       random = Math.round(Math.random()*questions.length)
    }
    res = questions.slice(random , random + 3)
    
    // console.log(res.length);
  }
  // אם אין 3 שאלות
  if (res.length < 3) {
    const tags = await readTags({ _id: { $in: qCurrent.tags } })
    let childrens = []
    tags.map(t => childrens.push(...t.children))
    const q = await read({tags: { $in: childrens } })
    res = q.slice(0,3)
  }
  return res
}
