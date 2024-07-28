import { readOne } from "../controller/qa.controller"


export const readOneQaService = async(filter) => await  readOne(filter)
export const readQaService = () => []