import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";

export async function GET() {
  await connectToDB();
  const extractData = await Project.find({});
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
      message: "error occour while Getting data",
    });
  }
}
