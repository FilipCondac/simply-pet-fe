import { NextResponse, NextRequest } from "next/server";
import connectDB from "../../../../db";
export async function POST(req: NextRequest) {
  // try {
  //   const { data } = await req.json();

  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_API_URL}/createPet`,
  //     {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );

  //   if (!res.ok) {
  //     // Throw a more descriptive error based on the response status
  //     throw new Error(
  //       `Failed to forward the data. Status: ${res.status}, StatusText: ${res.statusText}`
  //     );
  //   }
  //   const absoluteUrl = new URL("/viewPets", process.env.NEXT_PUBLIC_BASE_URL)
  //     .href;
  //   return NextResponse.redirect(absoluteUrl);
  // } catch (error: unknown) {
  //   console.error("Error posting data", error);
  //   return NextResponse.json({ error: error });
  // }

  connectDB();
}

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
