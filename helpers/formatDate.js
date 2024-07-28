
import axios from 'axios'
import parshiyotObject from "@/dateData/parashot20Years.json"
import holidaysObject from "@/dateData/holiday20Years.json"


// API
// קבלת פרשת השבוע הקרוב
export const getCurrentParashaFromAPI = async () => {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
 
  const getCurrentDate = () => formatDate(new Date());
  const getNextWeekDate = () => formatDate(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
 
  const parshiot = {
    "בראשית": "בראשית",
    "נח": "נח",
    "לך לך": "לך לך",
    "וירא": "וירא",
    "חיי שרה": "חיי שרה",
    "תולדות": "תולדות",
    "ויצא": "ויצא",
    "וישלח": "וישלח",
    "וישב": "וישב",
    "מקץ": "מקץ",
    "ויגש": "ויגש",
    "ויחי": "ויחי",
    "שמות": "שמות",
    "שמת": "שמות",
    "וארא": "וארא",
    "בא": "בא",
    "בשלח": "בשלח",
    "יתרו": "יתרו",
    "משפטים": "משפטים",
    "תרומה": "תרומה",
    "תצווה": "תצווה",
    "תצוה": "תצווה",
    "כי תשא": "כי תשא",
    "ויקהל": "ויקהל",
    "פקודי": "פקודי",
    "ויקרא": "ויקרא",
    "צו": "צו",
    "שמיני": "שמיני",
    "תזריע": "תזריע",
    "מצורע": "מצורע",
    "אחרי מות": "אחרי מות",
    "קדושים": "קדושים",
    "קדשים": "קדושים",
    "אמור": "אמור",
    "אמר": "אמור",
    "בהר": "בהר",
    "בחקותי": "בחקותי",
    "בחקתי": "בחקותי",
    "במדבר": "במדבר",
    "נשא": "נשא",
    "בהעלותך": "בהעלותך",
    "בהעלתך": "בהעלותך",
    "שלח": "שלח",
    "קרח": "קרח",
    "חוקת": "חוקת",
    "חקת": "חוקת",
    "בלק": "בלק",
    "פנחס": "פנחס",
    "פינחס": "פנחס",
    "מטות": "מטות",
    "מטת": "מטות",
    "מסעי": "מסעי",
    "דברים": "דברים",
    "ואתחנן": "ואתחנן",
    "עקב": "עקב",
    "ראה": "ראה",
    "שופטים": "שופטים",
    "שפטים": "שופטים",
    "כי תצא": "כי תצא",
    "כי תבא": "כי תבא",
    "נצבים": "נצבים",
    "וילך": "וילך",
    "האזינו": "האזינו",
    "וזאת הברכה": "וזאת הברכה"
  };
 
  const getParasha = (apiResponse) => {
    if (apiResponse.items && apiResponse.items.length > 0) {
      for (const item of apiResponse.items) {
        if (item.category === 'parashat') {
          const parashaHebrew = item.hebrew;
          const [first, second] = parashaHebrew.split(' ');
          const parasha = `${first} ${parshiot[second] || second}`;
          return parasha;
        }
      }
    }
    return null;
  };

  try {
   const range = `https://www.hebcal.com/hebcal?cfg=json&s=on&start=${getCurrentDate()}&end=${getNextWeekDate()}`;
    const response = await axios.get(range);
    const parasha = getParasha(response.data);
    return parasha.split(' ')[1];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// JSON
// קבלת פרשת השבוע מתוך קובץ פנימי
export const getCurrentParashaFromJSON = () => {
   // השגת התאריך הנוכחי
   const today = new Date();
 
   // מציאת מספר הימים עד השבת הקרובה
   const daysUntilSaturday = (6 - today.getDay() + 7) % 7;
 
   // פונקציה להוספת ימים לתאריך
   const addDays = (date, days) => {
     const result = new Date(date);
     result.setDate(result.getDate() + days);
     return result;
   };
 
   // חישוב התאריך של השבת הקרובה
   const nextSaturday = addDays(today, daysUntilSaturday);
   const saturdayDateString = nextSaturday.toISOString().split('T')[0];
 
   // בדיקה אם קיימת פרשה לשבת הקרובה
   if (parshiyotObject[saturdayDateString]) {
     const parsha = parshiyotObject[saturdayDateString]['inHebrew'];
     console.log(`פרשת השבוע הקרובה (${saturdayDateString}) היא: ${parsha}`);
     return parsha;
   } else {
     console.log(`לא נמצאה פרשה לשבת הקרובה (${saturdayDateString}).`);
     return null;
   }
 };

//  קבלת החג/אירוע המשמעותי הקרוב
 export const getUpcomingHolidayFromJSON = () => {
  const today = new Date();
  const twoWeeksFromNow = new Date(today.getTime() + 34 * 24 * 60 * 60 * 1000);
  let upcomingHolidayWithTag = null;

  for (const [dateStr, holiday] of Object.entries(holidaysObject)) {
    const holidayDate = new Date(dateStr);

    if (holidayDate >= today && holidayDate <= twoWeeksFromNow) {
      if (holiday.mainTag !== null) {
        // מצאנו חג עם תג שאינו null - נחזיר אותו מיד
        console.log(`החג הקרוב הוא: ${holiday.inHebrew}, תג: ${holiday.mainTag}`);
        return holiday.mainTag;
      } else if (upcomingHolidayWithTag === null) {
        // נמשיך לחפש, אבל נשמור את החג הראשון למקרה שלא נמצא אחר עם תג
        upcomingHolidayWithTag = holiday;
      }
    }
  }

  // אם לא מצאנו חג עם תג שאינו null, נחזיר "אין חג"
  console.log('אין חגים עם תג בשבועיים הקרובים');
  return null;
}


export const getDateInfo = ()=>{
  const data = {
    currentDate: getCurrentDateInHe(),
    currentParasha: getCurrentParashaFromJSON(),
    upcomingHoliday: getUpcomingHolidayFromJSON(),
  }
  return data;

}





// API
// // קבלת תאריך עברי
export const getCurrentDateInHe = async () => {
  const date = new Date()
 try {
  const range = `https://www.hebcal.com/converter?cfg=json&gy=${date.getFullYear()}&gm=${date.getMonth()+1}&gd=${date.getDate()}&g2h=1`;
   console.log(range);
   const response = await axios.get(range);
   const dateInHe = response.data.hebrew.replace(/[\u0591-\u05C7]/g, '');
   console.log(dateInHe)
   return dateInHe;
 } catch (error) {
   console.error('Error fetching data:', error);
   throw error;
 }
};

