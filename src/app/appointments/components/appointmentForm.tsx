import React from "react";
import { PetInterface } from "../../types/types";

type AppointmentFormProps = {
  pets: PetInterface[];
};

export default function AppointmentForm({
  pets,
}: AppointmentFormProps): React.ReactElement {
  return (
    <>
      <form className="flex-col flex w-1/2 m-auto border p-3">
        <h2 className="text-center text-3xl font-bold">Book Appointment</h2>
        <div className="flex mb-3">
          <label htmlFor="ownerName" className="w-1/4">
            Owner Name:
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            className="w-2/4 border border-black ml-2 rounded-md"
          />
        </div>
        <div className="flex mb-3">
          <label htmlFor="petName" className="w-1/4">
            Pet:
          </label>
          <select
            id="petName"
            name="petName"
            className="w-2/4 border border-black ml-2 rounded-md"
          >
            {pets.map((pet) => (
              <option key={pet._id} value={pet._id}>
                {pet.name} the {pet.species}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mb-3">
          <label htmlFor="date" className="w-1/4">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-2/4 border border-black ml-2 rounded-md"
          />
        </div>
        <div className="flex mb-3">
          <label htmlFor="time" className="w-1/4">
            Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="w-2/4 border border-black ml-2 rounded-md"
          />
        </div>
        <div className="flex mb-3">
          <label htmlFor="reason" className="w-1/4">
            Reason:
          </label>
          <textarea
            id="reason"
            name="reason"
            className="w-2/4 border border-black ml-2 rounded-md"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
