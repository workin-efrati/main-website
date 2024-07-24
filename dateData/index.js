

// const fs = require('fs');

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


const mongoose = require('mongoose');


// const { connect } = require('@/server/connect');
const { default: HolidaysModel } = require('@/server/models/holidays.model');

// פונקציה להכנסת החגים למסד הנתונים
async function insertHolidays(holidays) {
  try {
    // התחברות למסד הנתונים
    await mongoose.connect('mongodb+srv://efratishot:EfRaTi123@cluster0.vxi1h6a.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // await connect()

    for (const holiday of holidays) {
      const newHoliday = new HolidaysModel({
        name: holiday.hebrewName,
        englishName: holiday.englishName,
        type: 'holiday', // או 'parasha' לפי הצורך
      });

      await newHoliday.save();
      console.log(`הוכנס בהצלחה: ${holiday.hebrewName}`);
    }

    console.log('כל החגים הוכנסו בהצלחה');
  } catch (error) {
    console.error('שגיאה בהכנסת החגים:', error);
  } finally {
    // ניתוק מהמסד נתונים
    await mongoose.disconnect();
  }
}

// קריאת קובץ ה-JSON
const holidays = JSON.parse(fs.readFileSync('holiday20Years.json', 'utf8'));

// הרצת הפונקציה
insertHolidays(holidays);