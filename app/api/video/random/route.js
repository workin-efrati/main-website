import { connect } from "@/server/connect";
import { getRandom } from "@/server/services/vod.service";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await connect();
        const tags = await getRandom()
        return NextResponse.json(tags);
    }
    catch (error) {
        console.error("Error fetching questions: ", error);
        return new Response(JSON.stringify({ error: error.msg || 'something went wrong...' }), { status: 500 });
    }
}