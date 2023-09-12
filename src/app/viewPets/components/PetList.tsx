import React from "react";

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

type PetListProps = {
  petData: PetData[];
};

export default function PetList({ petData }: PetListProps): React.ReactElement {
  return (
    <div className="flex flex-wrap m-auto items-center mt-10 w-full p-10 h-screen">
      {petData.map((pet) => (
        <div
          key={pet._id}
          className="border flex-col border-black mb-5 m-auto w-1/4 mr-10 p-3 h-1/3 overflow-x-scroll"
        >
          <p>Name: {pet.name}</p>
          <p>Family Name: {pet.familyName}</p>
          <p>Species: {pet.species}</p>
          <p>Breed: {pet.breed}</p>
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
          <p>Medical History:</p>
          {pet.medicalHistory.map((entry, index) => (
            <div
              key={`${pet._id}_${index}`}
              className="border border-black mb-5 p-2"
            >
              <p>Date: {entry.date}</p>
              <p>Description: {entry.description}</p>
              <p>Treatment: {entry.treatment}</p>
            </div>
          ))}
          <p>VetID : {pet.vetID}</p>
        </div>
      ))}
    </div>
  );
}
