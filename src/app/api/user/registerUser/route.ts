import User from "../../../../../models/user";
import Vet from "../../../../../models/vet";
import conenctDB from "../../../../../db";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  petIDs: string[]; //Watch out for this one
}

interface VetProps {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  clinicName: string;
  clinicAddress: string;
  clinicPhoneNumber: string;
}

const passwordHashing = async (password: string) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

export async function POST(req: NextRequest) {
  try {
    await conenctDB();
    const { data } = await req.json();

    const isVet = data.isVet;
    if (isVet) {
      const {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        clinicName,
        clinicAddress,
        clinicPhoneNumber,
      } = data as VetProps;

      const passwordHash = await passwordHashing(password);

      const vet = await Vet.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        passwordHash: passwordHash,
        phoneNumber: phoneNumber,
        clinicName: clinicName,
        clinicAddress: clinicAddress,
        clinicPhoneNumber: clinicPhoneNumber,
      });

      return NextResponse.json({ vet: vet }, { status: 201 });
    } else {
      const { firstName, lastName, email, password, phoneNumber, address } =
        data as UserProps;

      const passwordHash = await passwordHashing(password);

      const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        passwordHash: passwordHash,
        phoneNumber: phoneNumber,
        address: address,
        petIDs: [],
      });

      return NextResponse.json({ user: user }, { status: 201 });
    }
  } catch (error) {
    console.error("Error posting data", error);
    throw error;
  }
}
