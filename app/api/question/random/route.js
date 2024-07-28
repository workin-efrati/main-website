import { connect } from "@/server/connect";
import { getRandom3 } from "@/server/services/question.service";
import { NextResponse } from "next/server";

export const GET = async (req) => {
   try {
      await connect();
       const tags = await getRandom3()
       return NextResponse.json(tags);
   }
   catch (error) {
       console.error("Error fetching questions: ", error);
       return new Response(JSON.stringify({error: error.msg || 'something went wrong...'}), { status: 500 }); 
   }
}