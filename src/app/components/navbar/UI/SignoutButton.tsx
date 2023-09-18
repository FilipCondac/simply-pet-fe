import Link from "next/link";
import React from "react";

export default function SignoutButton(): React.ReactElement {
  return <Link href="/api/auth/signout">Sign out</Link>;
}
