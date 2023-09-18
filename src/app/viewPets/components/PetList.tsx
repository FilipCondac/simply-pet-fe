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
      const res = await fetch(`/api/viewPets/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        window.location.reload();
      } else {
        console.error("Failed to delete pet");
      }
    } catch (error) {
      console.error("An error occurred while deleting the pet:", error);
    }
  };

  return (
    <section className="flex flex-col p-10  bg-gradient-to-r from-secondary to-white">
      <header className="flex flex-col mt-10 items-center">
        <h1 className="text-4xl font-bold">Your Pets</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => {
            window.location.href = "/createPet";
          }}
        >
          Add a Pet
        </button>
      </header>

      {petData.length === 0 ? (
        <div className="text-center mx-auto justify-center">
          <h2 className="text-3xl font-extrabold mb-4">
            You have no pets registered to your account
          </h2>
        </div>
      ) : (
        <div className="flex flex-wrap w-full h-screen mb-10 mt-10">
          {petData.map((pet) => (
            <article
              key={pet._id}
              className="border border-b-4 border-primary flex-col mb-5 mr-10 m-auto w-1/4 h-1/3 p-5 overflow-scroll bg-white rounded-lg shadow-lg"
            >
              <button
                className="float-right cursor-pointer"
                onClick={() => {
                  handleDelete(pet._id);
                }}
              >
                X
              </button>
              <header>
                <p>
                  <span className="font-bold">Name:</span> {pet.name}
                </p>
                <p>
                  <span className="font-bold">Family Name:</span>{" "}
                  {pet.familyName}
                </p>
              </header>
              <div>
                <p>
                  <span className="font-bold">Species:</span> {pet.species}
                </p>
                <p>
                  <span className="font-bold">Breed:</span> {pet.breed}
                </p>
                <p>
                  <span className="font-bold">Age:</span> {pet.age}
                </p>
                <p>
                  <span className="font-bold">Weight:</span> {pet.weight}
                </p>
              </div>
              <section>
                <header>
                  <p>
                    <span className="font-bold">Medical History:</span>
                  </p>
                </header>
                {pet.medicalHistory.map((entry, index) => (
                  <div
                    key={`${pet._id}_${index}`}
                    className="border border-black mb-5 p-2"
                  >
                    <p>
                      <span className="font-bold">Date:</span>{" "}
                      {entry.date.toString().replace(/T.*$/, "")}
                    </p>
                    <p>
                      <span className="font-bold">Description:</span>{" "}
                      {entry.description}
                    </p>
                    <p>
                      <span className="font-bold">Treatment:</span>{" "}
                      {entry.treatment}
                    </p>
                  </div>
                ))}
              </section>
              <footer>
                <p>
                  <span className="font-bold">VetID:</span> {pet.vetID}
                </p>
              </footer>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
