import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";
export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Experience.create(extractData);
    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "message saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "error occour while saving data",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "error occour while saving data",
    });
  }
}
