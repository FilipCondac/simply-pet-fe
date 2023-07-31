// import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <main className="flex flex-col justify-center items-start min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
