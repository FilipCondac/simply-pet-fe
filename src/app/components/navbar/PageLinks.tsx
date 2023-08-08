import Link from "next/link";
import React from "react";

export default function PageLinks() {
  return (
    <section className="flex ml-auto">
      <Link href="/" className="mx-5">
        Home
      </Link>
      <Link href="/" className="mx-5">
        {" "}
        My Pets{" "}
      </Link>
      <Link href="/" className="mx-5">
        {" "}
        Appointments{" "}
      </Link>
      <Link href="/" className="mx-5">
        {" "}
        About{" "}
      </Link>
    </section>
  );
}
