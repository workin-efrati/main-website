
import { connect } from "@/server/connect";
import QAModel from "@/server/models/qa.model";
import { NextResponse } from "next/server";


export const POST = async () => {
    try {
        const res = await markSensitiveQuestions();
        return NextResponse.json({res})
    } catch (error) {
        console.log({ error: error.message });
    }
}
// סימון שאלות רגישות יש לבצע מידי פעם
  async function markSensitiveQuestions() {
    try {
      await connect();
      // יצירת ביטוי רגולרי שמשתמש בביטוי או
      // להריץ 3 פעמים על כל וריאציה
      const sensitiveRegex = new RegExp(sensitiveWords.map(word => " "+`${word}` + ",").join('|'), 'i');
      const sensitiveRegex2 = new RegExp(sensitiveWords.map(word => " "+`${word}` + ".").join('|'), 'i');
      const sensitiveRegex3 = new RegExp(sensitiveWords.map(word => " "+`${word}` + " ").join('|'), 'i');
  // 
      // פילטר לחיפוש תוכן עם מילים רגישות
      const filter = {
        $and: [
          { isSensitive: { $ne: false } },
       { $or: [
          { title: { $regex: sensitiveRegex } },
          { question: { $regex: sensitiveRegex } },
          { answer: { $regex: sensitiveRegex } },
          
        ]},
      ]
      };
      // עדכון כל השאלות שמכילות מילים רגישות
      const result = await QAModel.updateMany(filter, {  isSensitive: true  });
     console.log(`Updated ${result.modifiedCount} questions to be sensitive`);
      // אופציונלי
      // // עדכון כל השאלות שלא מכילות מילים רגישות
      // const resetFilter = {
      //   $and: [
      //     { isSensitive: { $ne: true } },
      //     { $and: [
      //       { title: { $not: { $regex: sensitiveRegex } } },
      //       { question: { $not: { $regex: sensitiveRegex } } },
      //       { answer: { $not: { $regex: sensitiveRegex } } }
      //     ]}
      //   ]
      // };
  
      // const resetResult = await QAModel.updateMany(resetFilter, { $set: { isSensitive: false } });
      // console.log(`Reset ${resetResult.modifiedCount} questions to not be sensitive`);
     return result
    } catch (error) {
      console.error('Error processing questions:', error.message);
      return error.message;
    }
  }


// מערך המילים הרגישות בעברית
const sensitiveWords = [
  // מין
  "מין", "מינית", "מיניים", "מיניות",  "מיניים", "מיני", 
  "אונס", "נאנס", "נאנסה", "נאנסים", "נאנסות", "אנס", "אנסה", "אנסים", "אנסות",
  "סקס", "סקסי", "סקסית", "סקסיים", "סקסיות", 
  "פורנוגרפיה", "פורנו", "פורנוגרפי", "פורנוגרפית", "פורנוגרפיים", "פורנוגרפיות",
  "זנות", "זונה", "זונות", "זנאי", "זנאית", "זנאים", "זנאיות",
  "כוס", "כוסים", "כוסיות", "כוסית", 
   "זין", "יחסי מין", "לקיים יחסים", "יחסים",
  "ישבן", "ישבנים", "תחתונים",
  "חדירה", "חודר", "חודרים", "חודרות", "חדירות",
  "אורגזמה", "אורגזמות", "אורגזמי", "אורגזמית", "אורגזמיים", "אורגזמיות",
  "ליטוף", "ליטופים", "מלטף", "מלטפת", "מלטפים", "מלטפות", "לטף", "לטפה",
  "הוצאת זרע", "שמירת הברית", "סרטים כחולים", "גסויות", "איבר", "בחזה", "החזה", "זרע לבטלה", 
  "חרמנות","התחרמנות","מחרמן","חרמנית","סוטה","פדופיל","הומו","חרמנות","חרמנות",'להט"ב',"לסבית","סטרייט", "בגידות", "ניאוף",
  "שמירת הברית",'בת זוג', "הרהורים",'בתחת','קטינים','קטינות', "מציצה",'מצצה',
  "נשיקה", "נישק", "נישקה", "נישקו", "נשיקות", "מנשק", "מנשקת", "מנשקים", "מנשקות","התנשקו","התנשקנו","מתנשקים",
  "מתנשקות","אוננות","מאונן","משכב זכר","צעצועי מין",
  "חיבוק", "חיבוקים", "חיבוק", "מחבק", "מחבקת", "מחבקים", "מחבקות"
];






//   async function markSensitiveQuestions() {
//     try {
//       await connect();
  
//       // יצירת ביטוי רגולרי שמשתמש בביטוי או
//       // const sensitiveRegex = new RegExp(sensitiveWords.map(word => `\\b${word}\\b`).join('|'), 'i');
//       const sensitiveRegex = new RegExp(sensitiveWords.map(word => " "+`${word}` + ",").join('|'), 'i');
//   // 
//       // פילטר לחיפוש תוכן עם מילים רגישות
//       const filter = {
//         $or: [
//           { title: { $regex: sensitiveRegex } },
//           { question: { $regex: sensitiveRegex } },
//           { answer: { $regex: sensitiveRegex } },
          
//         ],
//       };

    

//     // const regexes = sensitiveWords.map(word => new RegExp(`\\b${word}\\b`, 'i'));

//     // const filter = {
//     //   $or: [
//     //     { title: { $in: regexes } },
//     //     { question: { $in: regexes } },
//     //     { answer: { $in: regexes } }
//     //   ]
//     // };
// //     let pipeline = [];
// // const searchValues = ['question', 'answer', 'title']
// //       const regexConditions = searchValues.map((searchValue) => {
// //         return sensitiveWords.map((word) => ({
// //           $cond: {
// //             if: { $regexMatch: { input: `$${searchValue}`, regex: new RegExp(" "+`${word}` + " ", "i") } },
// //             then: 1,
// //             else: 0
// //           }
// //         }));
// //       }).flat();
  
// //       pipeline.push({
// //         $project: {
// //             matchCount: { $sum: regexConditions },
// //             document: "$$ROOT"
// //         }
// //     });

// //     // Assuming you want to filter documents based on `matchCount`
// //     pipeline.push({
// //         $match: {
// //             matchCount: { $gt: 0 }
// //         }
// //     });
  
// //  console.log(pipeline);
// //       const results = await QAModel.aggregate(pipeline);

// // // Extract IDs of documents that need to be updated
// // const idsToUpdate = results.map(result => result.document._id);
// // console.log({idsToUpdate});

// // // Update documents that contain sensitive words
// // if (idsToUpdate.length > 0) {
// //     await QAModel.updateMany(
// //         { _id: { $in: idsToUpdate } },
// //         { $set: { isSensitive: true } }
// //     );
// // }
//       // עדכון כל השאלות שמכילות מילים רגישות
//       const result = await QAModel.updateMany(filter, {  isSensitive: true  });
//       console.log("🚀 ~ markSensitiveQuestions ~ result:", result)
  
//       console.log(`Updated ${result.modifiedCount} questions to be sensitive`);
  
//       // // עדכון כל השאלות שלא מכילות מילים רגישות
//       // const resetFilter = {
//       //   $and: [
//       //     { isSensitive: { $ne: true } },
//       //     { $or: [
//       //       { title: { $not: { $regex: sensitiveRegex } } },
//       //       { question: { $not: { $regex: sensitiveRegex } } },
//       //       { answer: { $not: { $regex: sensitiveRegex } } }
//       //     ]}
//       //   ]
//       // };
  
//       // const resetResult = await QAModel.updateMany(resetFilter, { $set: { isSensitive: false } });
  
//       // console.log(`Reset ${resetResult.modifiedCount} questions to not be sensitive`);
//     } catch (error) {
//       console.error('Error processing questions:', error.message);
//     }
//   }

//   async function markSensitiveQuestions() {
//     try {
//       // התחברות למאגר הנתונים
//       await connect();
//       const questions = await QAModel.updateMany()
  
//       const updatedQuestions = []; // משתנה לשמירת האובייקטים שהשתנו
      
//       for (const question of questions) {
//         const content = `${question.title || ""} ${question.question || ""} ${question.answer || ""}`;
  
//         // בדיקת האם המחרוזת מכילה מילים רגישות בשלמותן
//         const isSensitive = sensitiveWords.some(word => {
//           const regex = new RegExp(`\\b${word}\\b`, 'i');
//           return regex.test(content);
//         });


   
//         console.log("object is sensitive")
//         if (isSensitive) {
//           // עדכון השדה isSensitive
//           question.isSensitive = isSensitive;
//           await question.save();
  
//           // שמירת השאלה המעודכנת במערך
//           updatedQuestions.push(question);
//         }
//       }
  
//       // לוג של השאלות שהשתנו
//       console.log('Updated Questions:', updatedQuestions);
  
//       console.log('Finished processing all questions');
//     } catch (error) {
//       console.error('Error processing questions:', error.message);
//     }
//   }
  
 
  


