import { connect } from "@/server/connect";
import { getRandomQuestions } from "@/server/services/question.service";
import { NextResponse } from "next/server";

export const GET = async (req) => {
   try {
       await connect();
       
       const url = new URL(req.url);
       const searchParams = new URLSearchParams(url.search);
       const numberOfQuestions = parseInt(searchParams.get('limit')) || 3;

       const questions = await getRandomQuestions(numberOfQuestions)
       return NextResponse.json(questions);
   }
   catch (error) {
       console.error("Error fetching questions: ", error);
       return new Response(JSON.stringify({error: error.msg || 'something went wrong...'}), { status: 500 }); 
   }
}