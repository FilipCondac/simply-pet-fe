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
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/viewPets/api/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log("Pet deleted");
        window.location.reload();
      } else {
        console.error("Failed to delete pet");
      }
    } catch (error) {
      console.error("An error occurred while deleting the pet:", error);
    }
  };

  return (
    <section className="flex flex-wrap m-auto items-center mt-10 w-full p-10 h-screen">
      {petData.map((pet) => (
        <article
          key={pet._id}
          className="border flex-col border-black mb-5 m-auto w-1/4 mr-10 p-3 h-1/3 overflow-x-scroll"
        >
          <div
            className="float-right cursor-pointer"
            onClick={() => {
              handleDelete(pet._id);
            }}
          >
            X
          </div>
          <header>
            <p>Name: {pet.name}</p>
            <p>Family Name: {pet.familyName}</p>
          </header>
          <div>
            <p>Species: {pet.species}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
          <section>
            <header>
              <p>Medical History:</p>
            </header>
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
          </section>
          <footer>
            <p>VetID : {pet.vetID}</p>
          </footer>
        </article>
      ))}
    </section>
  );
}
