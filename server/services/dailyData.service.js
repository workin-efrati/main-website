import { getCurrentDateInfo, getCurrentDateInIsrael } from "@/helpers/formatDate";
import { connect as connectToMongo } from "@/server/connect";
import { readHolidayQa } from "@/server/controller/holiday.controller";
import { createDaily } from "../controller/daily.controller";
import DailyModel from "../models/daily.model";

export const readDailyData = async () => {
    try{
        await connectToMongo()
        const dailyData = await DailyModel.findOne({ date: getCurrentDateInIsrael()})
        if(dailyData){
        return dailyData
        }
        else{
        return await createDailyDataService()
        }
      }
        catch(error){
        console.log(error)
        return error
    }
}

const createDailyDataService = async () => {
    try{
        await connectToMongo()
    const dateInfo = await getCurrentDateInfo()
    const parashaQ = await readHolidayQa({ name: dateInfo.currentParasha || "לא נמצא שם פרשה", isActive: true }) || []
    const holidayQ = await readHolidayQa({ name: dateInfo.upcomingHoliday || "לא נמצא חג", isActive: true }) || []
    const data = {
        date: dateInfo.currentDate,
        heDate: dateInfo.currentHeDate,
        currentParasha: { name: dateInfo.currentParasha, q: parashaQ },
        upcomingHoliday: { name: dateInfo.upcomingHoliday, q: holidayQ },
    }

    const dailyData = await createDaily(data)
    if(dailyData._id){
        return dailyData
    }
    else{
        return null
    }
}
    catch(error){
        console.log(error)
        return error
    }
    
}












