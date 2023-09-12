import Link from "next/link";
import React from "react";

export default function PageLinks(): React.ReactElement {
  return (
    <ul className="flex ml-auto my-auto">
      <li className="mx-5">
        <Link href="/">Home</Link>
      </li>
      <li className="mx-5">
        <Link href="/viewPets">My Pets</Link>
      </li>
      <li className="mx-5">
        <Link href="/">Appointments</Link>
      </li>
      <li className="mx-5">
        <Link href="/">About</Link>
      </li>
    </ul>
  );
}
