import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Project from "@/models/Project";
export const dynomic = "force-dynomic";
export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Project.create(extractData);
    console.log(extractData);
    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "error occour while saving data",
      });
    }
  } catch (e) {
    console.log("error occour while saving data", e);
    return NextResponse.json({
      success: false,
      message: "error occour while saving data",
    });
  }
}
