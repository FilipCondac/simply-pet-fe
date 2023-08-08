import React from "react";
import SigninButton from "./LoginButton";
import SignoutButton from "./SignoutButton";
import PageLinks from "./PageLinks";
import { getServerSession } from "next-auth/next";
import { options } from "../../api/auth/[...nextauth]/options";
import SignupButton from "./SignupButton";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession(options);

  return (
    <nav className="flex bg-secondary p-2 fixed top-0 w-full z-50">
      <div className="flex w-full">
        <Link href="/"> Home </Link>
        <PageLinks />
        {!session ? (
          <div className="flex ml-auto mr-5">
            <SignupButton />
            <SigninButton />
          </div>
        ) : (
          <div className="flex ml-auto mr-5">
            <SignoutButton />
          </div>
        )}
      </div>
    </nav>
  );
}
