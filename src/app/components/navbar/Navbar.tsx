import React from "react";
import SigninButton from "./UI/LoginButton";
import SignoutButton from "./UI/SignoutButton";
import PageLinks from "./PageLinks";
import { getServerSession } from "next-auth/next";
import { options } from "../../api/auth/[...nextauth]/options";
import SignupButton from "./UI/SignupButton";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession(options);

  return (
    <nav className="flex bg-gradient-to-r from-primary to-secondary fixed top-0 w-full z-50 shadow-lg ">
      <div className="flex w-full my-auto text-white">
        <Link href="/" className=" flex">
          <img
            className="w-12 h-12"
            src="./logo.svg"
            alt="Simply Pet logo"
          ></img>{" "}
          <h1 className="my-auto font-bold text-2xl">SIMPLY PET</h1>
        </Link>
        <PageLinks />
        {!session ? (
          <div className="flex ml-auto mr-5 my-auto">
            <SignupButton />
            <SigninButton />
          </div>
        ) : (
          <div className="flex ml-auto mr-5 my-auto">
            <SignoutButton />
          </div>
        )}
      </div>
    </nav>
  );
}
