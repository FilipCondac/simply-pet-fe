// import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import Navbar from "./components/navbar/Navbar";
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
          <main className="flex flex-col  min-h-screen">
            <Navbar />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
