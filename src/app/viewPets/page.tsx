"use client";
import React, { useEffect, useState } from "react";
import PetList from "./components/PetList";

type PetData = {
  _id: string;
  name: string;
  familyName: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  medicalHistory: [
    {
      date: Date;
      description: string;
      treatment: string;
    }
  ];
  userID: string;
  vetID: string;
};

export default function ViewPets(): React.ReactElement {
  const [petData, setPetData] = useState<PetData[]>([]);
  const [loading, setLoading] = useState(true);

  //Fetch pets using handler
  const fetchPets = async () => {
    try {
      const response = await fetch("/api/viewPets");
      const petData = await response.json();
      console.log(petData);
      setPetData(petData);
      setLoading(false);
    } catch (error) {
      console.error("An error occurred while fetching the pets:", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <h2 className="text-center text-3xl font-extrabold mt-16">My Pets</h2>
      {loading ? (
        <div className="loader m-auto"></div>
      ) : (
        <PetList petData={petData} />
      )}
    </>
  );
}
