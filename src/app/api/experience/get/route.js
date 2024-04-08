import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Experience.find({});
    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "error occour while getting data",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "error occour while getting data",
    });
  }
}
