import Link from "next/link";
import React from "react";

export default function SignupButton() {
  return (
    <Link href="/register" className="mr-5">
      Sign Up
    </Link>
  );
}
