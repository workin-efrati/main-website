
import { create } from "@/server/controller/tags.controller";
import tagsModel from "@/server/models/tags.model";
import { readRelevantQaService } from "@/server/services/relevantQa.service";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        return NextResponse.json(await readRelevantQaService())
    } catch (error) {
        console.log({ error: error.message });
    }
}



