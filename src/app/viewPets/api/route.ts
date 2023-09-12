import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { options } from "../../api/auth/[...nextauth]/options";

export async function GET() {
  const session = await getServerSession(options);

  if (session) {
    const email = session.user?.email;
    try {
      const url = new URL("http://localhost:8000/api/routes/getPets");
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
