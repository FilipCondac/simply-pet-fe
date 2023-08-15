import Link from "next/link";
import React from "react";

export default function SigninButton(): React.ReactElement {
  return <Link href="/api/auth/signin">Sign In</Link>;
}
