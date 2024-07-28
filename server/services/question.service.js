import { readWithOptions } from "../controller/qa.controller";


export const getRandom3 = async (limit = 3) => {
   const questions = await readWithOptions({ isActive: true }, limit, ['tags'], '');
   return questions;

}