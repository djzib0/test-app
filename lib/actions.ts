import { Entry } from "@/lib/models";
import { connectToDb } from "@/lib/utils"
import { NextRequest, NextResponse } from "next/server";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GET = async (request: NextRequest) => {

    try {
        connectToDb();
        const entries = await Entry.find();
        return NextResponse.json(entries);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("Failed to fetch entries!")
    }
}