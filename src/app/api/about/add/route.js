import { NextResponse } from "next/server";
import connectToDB from "@/database";
import About from "@/models/About";
export const dynomic = "force-dynomic";
export async function POST(req) {
  await connectToDB();
  const extractData = await req.json();
  const saveData = await About.create(extractData);
  try {
    if (saveData) {
      NextResponse.json({
        success: true,
        message: "data saved successfully",
      });
    } else {
      NextResponse.json({
        success: false,
        message: "error occor while saving data",
      });
    }
  } catch (e) {
    console.log("error occor while saving data", e);
    NextResponse.json({
      success: false,
      message: "error occor while saving data",
    });
  }
}
