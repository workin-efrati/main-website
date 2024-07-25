
import { readRelevantQaService } from "@/server/services/relevantQa.service";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        return NextResponse.json(await readRelevantQaService())
    } catch (error) {
        console.log(error);
    }
}




