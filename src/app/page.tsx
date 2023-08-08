import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.BASE_API_URL;

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <div className="flex-col">
      {session ? (
        <div>{session?.user.email}</div>
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </div>
  );
}
