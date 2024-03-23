import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";
export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const { _id, aboutme, noofexperience, noofprojects, noofclients, skills } =
      extractData;
    const updateData = await About.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        aboutme,
        noofexperience,
        noofprojects,
        noofclients,
        skills,
      },
      {
        new: true,
      }
    );
    if (updateData) {
      NextResponse.json({
        success: true,
        message: "about data has been updated successfuly",
      });
    } else {
      NextResponse.json({
        success: false,
        message: "error occour while updating about data",
      });
    }
  } catch (e) {
    console.log(e);
    NextResponse.json({
      success: false,
      message: "error occour  while updating about data",
    });
  }
}
