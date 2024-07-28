import { getAllTagsService } from '@/server/service/tag.service'
import { NextResponse } from "next/server";


export const GET = async (req) => {
    console.log("💥💢💌💝💘🧡❤");

    try {
        // const tags = await getAllTagsService()
        return NextResponse.json(tags)
    }
    catch (error) {
        console.error("Error fetching tags: ", error);
        throw error;
    }

}