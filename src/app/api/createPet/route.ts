import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { data } = await req.json();

    const res = await fetch("http://localhost:8000/api/routes/createPet", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      // Throw a more descriptive error based on the response status
      throw new Error(
        `Failed to forward the data. Status: ${res.status}, StatusText: ${res.statusText}`
      );
    }
    return res.ok;
  } catch (error: unknown) {
    console.error("Error posting data", error);
    const absoluteUrl = new URL("/", "http://localhost:3000").href;
    return NextResponse.redirect(absoluteUrl);
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
