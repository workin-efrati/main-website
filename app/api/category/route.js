import { getAllTagsService } from '@/server/services/tag.service'
import { NextResponse } from "next/server";
import {connect} from '@/server/connect'

export const GET = async (req) => {
    try {
       await connect();
        const tags = await getAllTagsService()
        return NextResponse.json(tags);
    }
    catch (error) {
        console.error("Error fetching tags: ", error);
        return NextResponse.json(error);

    }

}