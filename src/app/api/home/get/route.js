import Home from "@/app/page";
import connectToDB from "@/database";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";
export async function get(req) {
  try {
    await connectToDB();
    const extractData = await Home.find({});
    if (extractData) {
      NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      NextResponse.json({
        success: false,
        message: "error occour while getting data",
      });
    }
  } catch (e) {
    console.log(e);
    NextResponse.json({
      success: false,
      message: "error occour while getting data",
    });
  }
}
