import bcrypt from "bcryptjs";
import connectDB from "../../../../../db";
import User from "../../../../../models/user";
import Vet from "../../../../../models/vet";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("POST request to /api/user/verifyUser");
  const { credentials } = await req.json();
  const password = credentials.password;
  const email = credentials.email;

  try {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      const vet = await Vet.findOne({ email });
      if (!vet) {
        // User not found
        return new NextResponse(JSON.stringify("User not found"), {
          status: 404,
        });
      } else {
        const isMatch = await bcrypt.compare(password, vet.passwordHash);
        if (isMatch) {
          // Vet login successful
          return new NextResponse(JSON.stringify(vet), { status: 200 });
        } else {
          // Password incorrect
          return new NextResponse(JSON.stringify("Incorrect password"), {
            status: 401,
          });
        }
      }
    } else {
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (isMatch) {
        // User login successful
        return new NextResponse(JSON.stringify(user), { status: 200 });
      } else {
        // Password incorrect
        return new NextResponse(JSON.stringify("Incorrect password"), {
          status: 401,
        });
      }
    }
  } catch (error: unknown) {
    console.log("Error getting data", error);
    return new NextResponse(JSON.stringify("Internal Server Error"), {
      status: 500,
    });
  }
}
