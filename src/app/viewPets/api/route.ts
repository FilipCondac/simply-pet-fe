import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../api/auth/[...nextauth]/options";

export async function GET() {
  const session = await getServerSession(options);

  if (session) {
    const email = session.user?.email as string;
    try {
      const url = new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}/getPets`);
      url.searchParams.append("email", email);

      const res = await fetch(url.toString(), {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        // Throw a more descriptive error based on the response status
        throw new Error(
          `Failed to forward the data. Status: ${res.status}, StatusText: ${res.statusText}`
        );
      } else {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch (error: unknown) {
      console.log("Error getting data", error);
    }
  }
}

export async function DELETE(req: NextRequest) {
  console.log("req", req);
}
