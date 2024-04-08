import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";

export async function GET() {
  try {
    await connectToDB();
    const extractData = await Project.find({});
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
      message: "error occour while Getting data",
    });
  }
}
