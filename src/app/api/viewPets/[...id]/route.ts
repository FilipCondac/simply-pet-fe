// import { NextRequest } from "next/server";

// export async function DELETE(req: NextRequest) {
//   const pathname = req.nextUrl.pathname.split("/");
//   const id = pathname[pathname.length - 1];

//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API_URL}/deletePet`,
//       {
//         method: "DELETE",
//         body: JSON.stringify({ id }),
//         headers: { "Content-Type": "application/json" },

//   }
//     );
