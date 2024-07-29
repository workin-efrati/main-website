import { readHolidayQa } from "@/server/controller/holiday.controller";
import { getCurrentDateInfo } from "@/helpers/formatDate";
import { connect as connectToMongo } from "@/server/connect";
import tagsModel from "../models/tags.model";
import parashiot from '@/dateData/parashaNames.json';
import { create } from "../controller/tags.controller";
import HolidaysModel from "../models/holidays.model";
import DailyModel from "../models/daily.model";
import { createDaily } from "../controller/daily.controller";

// export const readRelevantQaService = async () => {
//     await connectToMongo()
//     const data = getCurrentDateInfo()
//     console.log(data);
//     const currentParasha = data.currentParasha
//     const nextHoliday = data.upcomingHoliday
//     const forParasha = await readHolidayQa({ name: currentParasha || "לא נמצא שם פרשה", isActive: true })
//     const forHoliday = await readHolidayQa({ name: nextHoliday || "לא נמצא חג", isActive: true })
//     const relevantQa = { forParasha, forHoliday }
//     return relevantQa

// }


export const readDailyData = async () => {
    await connectToMongo()
    const dateData = await getCurrentDateInfo()
    console.log(await readHolidayQa({ name: dateData.upcomingHoliday || "לא נמצא חג", isActive: true }))

    const data = {
        date: dateData.currentHeDate,
        heDate: dateData.currentHeDate,
        currentParasha: {name: dateData.currentParasha, q: await readHolidayQa({ name: dateData.currentParasha || "לא נמצא שם פרשה", isActive: true }) || []},
        upcomingHoliday:{name: dateData.upcomingHoliday, q:await readHolidayQa({ name: dateData.upcomingHoliday || "לא נמצא חג", isActive: true }) || []},
    }
    const {_id}= await createDaily(data)
    console.log(_id)
    return data

}











