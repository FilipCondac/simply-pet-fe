import "tailwindcss/tailwind.css";
// import { Inter } from 'next/font/google'
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
          <main className="flex justify-center items-start p-6 min-h-screen">
            <Navbar />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
