import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";
export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Home.create(extractData);
    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "data saved successfuly",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "error occour",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: "error occours " });
  }
}
