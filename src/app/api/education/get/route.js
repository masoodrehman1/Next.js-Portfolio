import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynomic = "force-dynomic";
export async function GET(req) {
  await connectToDB();
  const extractData = await Education.find({});
  try {
    if (extractData) {
      NextResponse({ success: true, data: extractData });
    } else {
      NextResponse({
        success: false,
        message: "error occour while getting data",
      });
    }
  } catch (e) {
    console.log(e);
    NextResponse({
      success: false,
      message: "error occour while getting data",
    });
  }
}
