import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const { _id, heading, summary } = extractData;
    const updateData = await Home.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        heading,
        summary,
      },
      {
        new: true,
      }
    );
    if (updateData) {
      NextResponse.json({
        success: true,
        message: "Home data has been updated successfuly",
      });
    } else {
      NextResponse.json({
        success: false,
        message: "error occour while updating Home data",
      });
    }
  } catch (e) {
    console.log(e);
    NextResponse.json({
      success: false,
      message: "error occour while updating data ",
    });
  }
}
