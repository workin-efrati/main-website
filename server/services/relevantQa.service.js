import { readHolidayQa} from "@/server/controller/holiday.controller";
import { getDateInfo } from "@/helpers/formatDate";
import { connect as connectToMongo } from "@/server/connect";

export const readRelevantQaService = async () =>{
    await connectToMongo()
        const data = getDateInfo()
        console.log(data);
        const currentParasha = data.currentParasha
        const nextHoliday = data.upcomingHoliday
        const forParasha = await readHolidayQa({ name: currentParasha || "לא נמצא שם פרשה", isActive: true })
        const forHoliday = await readHolidayQa({ name: nextHoliday || "לא נמצא חג", isActive: true })
        const relevantQa = {forParasha, forHoliday}
    return relevantQa

}
