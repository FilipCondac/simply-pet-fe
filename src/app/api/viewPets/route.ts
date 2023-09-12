import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";
import connectDB from "../../../../db";
import Pet from "../../../../models/pet";

export async function GET() {
  const session = await getServerSession(options);

  if (session) {
    const email = session.user?.email as string;
    try {
      await connectDB();
      const data = await Pet.find({ userID: email });
      if (!data) {
        return NextResponse.json({ error: "No data found" });
      } else {
        return NextResponse.json(data);
      }
    } catch (error: unknown) {
      console.log("Error getting data", error);
    }
  }
}
