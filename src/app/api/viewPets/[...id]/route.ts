import { NextRequest, NextResponse } from "next/server";
import Pet from "../../../../../models/pet";

export async function DELETE(req: NextRequest) {
  const pathname = req.nextUrl.pathname.split("/");
  const id = pathname[pathname.length - 1];

  try {
    await Pet.findByIdAndDelete(id);
    const absoluteUrl = new URL("/viewPets", process.env.NEXT_PUBLIC_BASE_URL)
      .href;
    return NextResponse.redirect(absoluteUrl);
  } catch (error: unknown) {
    console.log("Error deleting data", error);
  }
}
