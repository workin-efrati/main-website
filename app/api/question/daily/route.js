
import { readDailyData } from "@/server/services/dailyData.service";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        return NextResponse.json(await readDailyData())
    } catch (error) {
        console.log({ error: error.message });
    }
}



