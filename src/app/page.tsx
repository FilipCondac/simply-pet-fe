import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import TopSection from "./components/dashboard/TopSection";
import ServicesSection from "./components/dashboard/ServicesSection";
import React from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.BASE_API_URL;

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="flex flex-col min-h-screen">
      <TopSection />
      <ServicesSection />
    </main>
  );
}
