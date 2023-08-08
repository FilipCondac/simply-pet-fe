import Link from "next/link";
import React from "react";

export default function SignoutButton() {
  return (
    <div>
      <button>
        <Link href="/api/auth/signout">Sign out</Link>
      </button>
    </div>
  );
}
