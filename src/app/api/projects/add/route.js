import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Project from "@/models/Project";
export const dynomic = "force-dynomic";
export async function POST(req) {
  await connectToDB();
  const extractData = req.json();
  const saveData = Project.create(extractData);
  try {
    if (saveData) {
      NextResponse.json({
        success: false,
        message: "data saved successfully",
      });
    } else {
      NextResponse.json({
        success: false,
        message: "error occour while saving data",
      });
    }
  } catch (e) {
    console.log("error occour while saving data", e);
    NextResponse.json({
      success: false,
      message: "error occour while saving data",
    });
  }
}
