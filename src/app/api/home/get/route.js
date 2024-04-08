import Home from "@/models/Home";
import connectToDB from "@/database";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Home.find({});
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
