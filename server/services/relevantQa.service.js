import { readHolidayQa} from "@/server/controller/holiday.controller";
import { getDateInfo } from "@/helpers/formatDate";
import { connect as connectToMongo } from "@/server/connect";
import tagsModel from "../models/tags.model";
import parashiot from '@/dateData/parashaNames.json';
import { create } from "../controller/tags.controller";
import HolidaysModel from "../models/holidays.model";

export const readRelevantQaService = async () =>{
    await connectToMongo()
        const data = getDateInfo()
        console.log(data);
        const currentParasha = data.currentParasha
        const nextHoliday = data.upcomingHoliday
        const forParasha = await readHolidayQa({ name: currentParasha || "לא נמצא שם פרשה", isActive: true })
        const forHoliday = await readHolidayQa({ name: nextHoliday || "לא נמצא חג", isActive: true })
        const relevantQa = {forParasha, forHoliday}


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
try{
            // Fetch all parasha objects
      const parashas = await HolidaysModel.find({ type: 'parasha' });
  
      // Fetch all tags
      const tags = await tagsModel.find();
  
      for (const parasha of parashas) {
        // Find the matching tag
        const matchingTag = tags.find(tag => {
          // Remove "פרשת " from the tag name and compare with parasha name
          const tagNameWithoutPrefix = tag.name.replace(/^פרשת /, '');
          return tagNameWithoutPrefix === parasha.name;
        });
  
        if (matchingTag) {
          // Update the parasha's tags array
          await HolidaysModel.findOneAndUpdate(parasha._id, { 
            $addToSet: { tags: matchingTag._id } 
          });
          console.log(`Updated tags for parasha: ${parasha.name}`);
        } else {
          console.log(`No matching tag found for parasha: ${parasha.name}`);
        }
      }
  
      console.log('Finished updating parasha tags');
    } catch (error) {
      console.error('Error updating parasha tags:', error);
    }
  



        

  
 


    return relevantQa

}


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




