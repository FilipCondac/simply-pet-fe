import React from "react";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <nav className="flex-col flex top-0 z-50">
      <LoginButton />
    </nav>
  );
}
