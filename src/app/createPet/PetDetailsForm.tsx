import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
  name: string;
  familyName: string;
  age: string;
  species: string;
  breed: string;
  weight: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export default function PetDetailsForm({
  name,
  familyName,
  age,
  species,
  breed,
  weight,
  updateFields,
}: UserFormProps): React.ReactElement {
  return (
    <FormWrapper title="Pet Details">
      <label className="font-semibold" htmlFor="name">
        Pet Name
      </label>
      <input
        className="border border-black mb-2"
        placeholder="Bobby"
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
        required
      />
      <label className="font-semibold" htmlFor="familyName">
        Family Name
      </label>
      <input
        className="border border-black mb-2"
        placeholder="Smith"
        type="text"
        id="familyName"
        name="familyName"
        value={familyName}
        onChange={(e) => updateFields({ familyName: e.target.value })}
        required
      />
      <label className="font-semibold" htmlFor="age">
        Age
      </label>
      <input
        className="border border-black mb-2"
        placeholder="5"
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
        required
      />
      <label className="font-semibold" htmlFor="species">
        Species
      </label>
      <input
        className="border border-black mb-2"
        placeholder="Dog"
        type="text"
        id="species"
        name="species"
        value={species}
        onChange={(e) => updateFields({ species: e.target.value })}
        required
      />
      <label className="font-semibold" htmlFor="breed">
        Breed
      </label>
      <input
        className="border border-black mb-2"
        placeholder="Labrador"
        type="text"
        id="breed"
        name="breed"
        value={breed}
        onChange={(e) => updateFields({ breed: e.target.value })}
        required
      />
      <label className="font-semibold" htmlFor="weight">
        Weight
      </label>
      <input
        className="border border-black mb-2"
        placeholder="10kg"
        type="number"
        id="weight"
        name="weight"
        value={weight}
        onChange={(e) => updateFields({ weight: e.target.value })}
        required
      />
    </FormWrapper>
  );
}
