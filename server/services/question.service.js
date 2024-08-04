import { getRandom, readWithOptions } from "../controller/qa.controller";


export const getRandomQuestions = async (limit = 3) => {
   const questions = await getRandom(limit, {
      isActive: true,
      $or: [{ isSensitive: false }, { isSensitive: { $exists: false } }]
   }, 'tags');
   return questions;
}