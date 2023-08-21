import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log(req);

    const res = await fetch("http://localhost:8000/api/routes/createPet", {
      method: "POST",
      //   body: JSON.stringify(incomingData),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      // Throw a more descriptive error based on the response status
      throw new Error(
        `Failed to forward the data. Status: ${res.status}, StatusText: ${res.statusText}`
      );
    }

    // Use the full absolute URL for redirect
    const absoluteUrl = new URL("/", "http://localhost:3000").href;
    return NextResponse.redirect(absoluteUrl);
  } catch (error: unknown) {
    console.error("Error posting data", error);
    const absoluteUrl = new URL("/", "http://localhost:3000").href;
    return NextResponse.redirect(absoluteUrl);
  }
}
