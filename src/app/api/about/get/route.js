import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";
export const dynomic = "dynomic-force";

export async function GET() {
  try {
    await connectToDB();
    const extractData = await About.find({});
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
