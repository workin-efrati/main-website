
import { create } from "@/server/controller/tags.controller";
import tagsModel from "@/server/models/tags.model";
import QAModel from "@/server/models/qa.model";
import { readRelevantQaService } from "@/server/services/relevantQa.service";
import { NextResponse } from "next/server";
import { connect } from "@/server/connect";
import HolidaysModel from "@/server/models/holidays.model";
import { getHebrewDate, getDateInHe } from "@/helpers/formatDate";


export const GET = async () => {
    try {
        return NextResponse.json(await readRelevantQaService())
    } catch (error) {
        console.log({ error: error.message });
    }
}

export const POST = async (req) => {

}

