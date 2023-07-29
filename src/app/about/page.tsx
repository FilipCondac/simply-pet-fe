import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "../components/UserCard";
import Navbar from "../components/Navbar";
import React from "react";

export default async function AboutPage() {
  const session = await getServerSession(options);

  return (
    <div className="flex-col">
      <Navbar />
      {session ? (
        <UserCard user={session?.user} pagetype={"This is my about page"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </div>
  );
}
