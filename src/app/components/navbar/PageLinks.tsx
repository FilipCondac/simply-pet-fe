import Link from "next/link";
import React from "react";

export default function PageLinks(): React.ReactElement {
  return (
    <ul className="flex mx-auto my-auto">
      <li className="mx-5 transition duration-300 ease-in-out transform hover:scale-105">
        <Link href="/">Home</Link>
      </li>
      <li className="mx-5 transition duration-300 ease-in-out transform hover:scale-105">
        <Link href="/viewPets">My Pets</Link>
      </li>
      <li className="mx-5 transition duration-300 ease-in-out transform hover:scale-105">
        <Link href="/">Appointments</Link>
      </li>
      <li className="mx-5 transition duration-300 ease-in-out transform hover:scale-105">
        <Link href="/">About</Link>
      </li>
    </ul>
  );
}
