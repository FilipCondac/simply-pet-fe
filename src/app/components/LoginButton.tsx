import Link from "next/link";
import React from "react";

export default function LoginButton() {
  return (
    <div>
      <button>
        <Link href="/api/auth/signin">Sign In</Link>
      </button>
    </div>
  );
}
