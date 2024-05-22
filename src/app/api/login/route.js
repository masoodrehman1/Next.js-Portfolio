import connectToDB from "@/database";
import User from "@/models/User";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";
export const dynomic = "force-dynomic";
export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();
    const checkUser = await User.findOne({ username });
    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "username not exist ",
      });
    }
    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);
    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "password does not match try again",
      });
    }
    return NextResponse.json({
      success: true,
      message: "logged in successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: true,
      message: "something went wrong please try again",
    });
  }
}
