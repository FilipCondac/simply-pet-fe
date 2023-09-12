import { NextResponse, NextRequest } from "next/server";
import { PetInterface } from "../../types/types";
import Pet from "../../../../models/pet";
import connectDB from "../../../../db";

export async function POST(req: NextRequest) {
  try {
    const { data } = await req.json();

    const {
      name,
      familyName,
      species,
      breed,
      age,
      weight,
      medicalHistory,
      userID,
      vetID,
    } = data as PetInterface;

    await connectDB();

    await Pet.create({
      name: name,
      familyName: familyName,
      species: species,
      breed: breed,
      age: age,
      weight: weight,
      medicalHistory: medicalHistory,
      userID: userID,
      vetID: vetID,
    });

    const absoluteUrl = new URL("/viewPets", process.env.NEXT_PUBLIC_BASE_URL)
      .href;
    return NextResponse.redirect(absoluteUrl);
  } catch (error: unknown) {
    console.error("Error posting data", error);
    return NextResponse.json({ error: error });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
