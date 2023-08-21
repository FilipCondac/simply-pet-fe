import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(options);

    if (session && session.user?.email) {
      return NextResponse.json({ email: session.user.email });
    }

    // In case there's no session or email
    return NextResponse.json({ email: "" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
