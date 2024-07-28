
import { read } from "@/server/controller/holiday.controller"
import { getCurrentParashaFromJSON } from "./formatDate"

export const getRelevantQuestions = async () => {
    const currentParasha = getCurrentParashaFromJSON()
    let data = await read({ name: currentParasha, isActive: true })
    return data
}