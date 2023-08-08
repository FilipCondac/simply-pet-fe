import Link from "next/link";
import React from "react";

export default function SignupButton() {
  return (
    <div>
      <button className="mr-2">
        <Link href="/register">Sign Up</Link>
      </button>
    </div>
  );
}
