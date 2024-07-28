

// const fs = require('fs');

const { connect } = require("@/server/connect");
import holidays from '../dateData/holidayNames.json';

// // קריאת הקובץ
// const rawData = fs.readFileSync('holiday20Years.json');
// const holidays = JSON.parse(rawData);

// // עיבוד הנתונים
// const processedHolidays = new Map();

// for (const [date, holiday] of Object.entries(holidays)) {
//   if (holiday.mainTag) {
//     // אם ה-mainTag קיים וטרם נוסף למפה
//     if (!processedHolidays.has(holiday.mainTag)) {
//       processedHolidays.set(holiday.mainTag, {
//         name: holiday.mainTag,
//         englishName: holiday.inEnglish
//       });
//     }
//   }
// }

// // המרת המפה למערך
// const result = Array.from(processedHolidays.values());

// // כתיבת התוצאה לקובץ
// fs.writeFileSync('output.json', JSON.stringify(result, null, 2));

// console.log('הקובץ החדש נוצר בהצלחה.');


// const mongoose = require('mongoose');


// const { connect } = require('@/server/connect');
// const HolidaysModel  = require('@/server/models/holidays.model.js');






// // פונקציה להכנסת החגים למסד הנתונים
// "use server"
// import { connect } from "@/server/connect"
// import { create } from "@/server/controller/pendingQa.controller"
// import { revalidatePath } from "next/cache"
// import { redirect } from "next/navigation"

// // import  holidays from "../dateData/holidayNames.json"
// import  holidays from "../dateData/holidaysNames.json"
// import HolidaysModel from "@/server/models/holidays.model"
// // import { cookies } from "next/headers";
// // import { createQuestionService } from "../services/question.service"



// export const createQuestionAction = async (prevState, fd) => {
//   async function insertHolidays(holidays) {
//     try {
//       await connect()
  
//       for (const holiday of holidays) {
//         const newHoliday = new HolidaysModel({
//           name: holiday.hebrewName,
//           englishName: holiday.englishName,
          
//           type: 'holiday', // או 'parasha' לפי הצורך
//           // type: 'parasha', // או 'holiday' לפי הצורך
//         });
  
//         await newHoliday.save();
//         console.log(`הוכנס בהצלחה: ${holiday.hebrewName}`);
//       }
  
//       console.log('כל החגים הוכנסו בהצלחה');
//     } catch (error) {
//       console.error('שגיאה בהכנסת החגים:', error);
//     } finally {
//       // ניתוק מהמסד נתונים
//       // await mongoose.disconnect();
//     }
//   }
  
//   // קריאת קובץ ה-JSON
//   // const holidays = JSON.parse(holiday20Years);
  
//   // הרצת הפונקציה
//   insertHolidays(holidays);
// }


// async function insertTorahPortions() {
//     try {
//         await connectToMongo()
//       // שליפת החומשים הקיימים
//       const chumashim = await tagsModel.find({ name: { $in: [
//         'ספר בראשית', 'ספר שמות', 'ספר ויקרא', 'ספר במדבר', 'ספר דברים'
//       ]}});
  
//       if (chumashim.length !== 5) {
//         throw new Error('לא נמצאו כל חמשת החומשים במסד הנתונים');
//       }
  
//       console.log('החומשים נשלפו בהצלחה');
  
//       // פונקציה עזר לקביעת החומש של כל פרשה
//       function getChumashIndex(index) {
//         if (index <= 11) return 0; // בראשית
//         if (index <= 22) return 1; // שמות
//         if (index <= 33) return 2; // ויקרא
//         if (index <= 42) return 3; // במדבר
//         return 4; // דברים
//       }
  
//       // הכנסת הפרשות
//       for (let i = 0; i < parashiot.length; i++) {
//         const portion = parashiot[i];
//         const chumashIndex = getChumashIndex(i);
        
//         const newPortion = await create({
//           name: `פרשת ${portion.hebrewName}`,
//           description: `פרשת ${portion.hebrewName}`,
//           isActive: true,
//           parent: chumashim[chumashIndex]._id
//         });
  
//         console.log(`הוכנס בהצלחה: פרשת ${portion.hebrewName}`);
  
//         // עדכון החומש עם הפרשה החדשה
//         await tagsModel.findByIdAndUpdate(
//           chumashim[chumashIndex]._id,
//           { $push: { children: newPortion._id } }
//         );
//       }
  
//       console.log('כל הפרשות הוכנסו בהצלחה');
//       return NextResponse.json(await readRelevantQaService())
//     } catch (error) {
//       console.error('שגיאה בהכנסת הפרשות:', error);
//     } finally {
//       // ניתוק מהמסד נתונים
//     //   await mongoose.disconnect();
//     }
//   }

        // // שליפת החומשים הקיימים
        // const chumashim = await tagsModel.find({ name: { $in: [
        //   'ספר בראשית', 'ספר שמות', 'ספר ויקרא', 'ספר במדבר', 'ספר דברים'
        // ]}});
    
        // if (chumashim.length !== 5) {
        //   throw new Error('לא נמצאו כל חמשת החומשים במסד הנתונים');
        // }
    
        // console.log('החומשים נשלפו בהצלחה');
    
        // // פונקציה עזר לקביעת החומש של כל פרשה
        // function getChumashIndex(index) {
        //   if (index <= 11) return 0; // בראשית
        //   if (index <= 23) return 1; // שמות
        //   if (index <= 36) return 2; // ויקרא
        //   if (index <= 48) return 3; // במדבר
        //   return 4; // דברים
        // }
    
        // // הכנסת הפרשות
        // for (let i = 0; i < parashiot.length; i++) {
        //   const portion = parashiot[i];
        //   const chumashIndex = getChumashIndex(i);
          
        //   const newPortion = await create({
        //     name: `פרשת ${portion.hebrewName}`,
        //     description: `פרשת ${portion.hebrewName}`,
        //     isActive: true,
        //     parent: chumashim[chumashIndex]._id
        //   });
    
        //   console.log(`הוכנס בהצלחה: פרשת ${portion.hebrewName}`);
    
        //   // עדכון החומש עם הפרשה החדשה
        //   await tagsModel.findByIdAndUpdate(
        //     chumashim[chumashIndex]._id,
        //     { $push: { children: newPortion._id } }
        //   );
        // }


  //       try{
  //         // Fetch all parasha objects
  //   const parashas = await HolidaysModel.find({ type: 'parasha' });

  //   // Fetch all tags
  //   const tags = await tagsModel.find();

  //   for (const parasha of parashas) {
  //     // Find the matching tag
  //     const matchingTag = tags.find(tag => {
  //       // Remove "פרשת " from the tag name and compare with parasha name
  //       const tagNameWithoutPrefix = tag.name.replace(/^פרשת /, '');
  //       return tagNameWithoutPrefix === parasha.name;
  //     });

  //     if (matchingTag) {
  //       // Update the parasha's tags array
  //       await HolidaysModel.findOneAndUpdate(parasha._id, { 
  //         $addToSet: { tags: matchingTag._id } 
  //       });
  //       console.log(`Updated tags for parasha: ${parasha.name}`);
  //     } else {
  //       console.log(`No matching tag found for parasha: ${parasha.name}`);
  //     }
  //   }

  //   console.log('Finished updating parasha tags');
  // } catch (error) {
  //   console.error('Error updating parasha tags:', error);
  // }
