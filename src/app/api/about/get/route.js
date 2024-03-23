import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";
export const dynomic = "dynomic-force";

export async function GET() {
  await connectToDB();
  const extractData = await About.find({});
  try {
    if (extractData) {
      NextResponse({
        success: true,
        data: extractData,
      });
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
