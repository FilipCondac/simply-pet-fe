import React from "react";
import SigninButton from "./UI/LoginButton";
import SignoutButton from "./UI/SignoutButton";
import PageLinks from "./PageLinks";
import { getServerSession } from "next-auth/next";
import { options } from "../../api/auth/[...nextauth]/options";
import SignupButton from "./UI/SignupButton";
import Link from "next/link";

export default async function Navbar(): Promise<React.ReactElement> {
  const session = await getServerSession(options);

  return (
    <nav className="flex bg-gradient-to-r text-white from-primary to-secondary fixed top-0 w-full z-50 shadow-lg ">
      <div className="flex w-1/3">
        <Link href="/">
          <span className="flex items-center">
            <img className="w-12 h-12" src="./logo.svg" alt="Simply Pet logo" />
            <h1 className="ml-2 my-auto font-bold text-2xl">SIMPLY PET</h1>
          </span>
        </Link>
      </div>

      <div className="flex w-1/3 justify-center">
        <PageLinks />
      </div>

      <div className="flex w-1/3 justify-end mr-5 my-auto">
        {!session ? (
          <>
            <SignupButton />
            <SigninButton />
          </>
        ) : (
          <SignoutButton />
        )}
      </div>
    </nav>
  );
}
