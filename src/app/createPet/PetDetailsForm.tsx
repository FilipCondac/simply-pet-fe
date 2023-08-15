import React from "react";
import FormWrapper from "./FormWrapper";

export default function PetDetailsForm(): React.ReactElement {
  return (
    <FormWrapper title="Pet Details">
      <label className="font-semibold" htmlFor="name">
        Pet Name
      </label>
      <input
        className="border border-black mb-2"
        type="text"
        id="name"
        name="name"
      />
      <label className="font-semibold" htmlFor="familyName">
        Family Name
      </label>
      <input
        className="border border-black mb-2"
        type="text"
        id="familyName"
        name="familyName"
      />
      <label className="font-semibold" htmlFor="age">
        Age
      </label>
      <input
        className="border border-black mb-2"
        type="number"
        id="age"
        name="age"
      />
      <label className="font-semibold" htmlFor="species">
        Species
      </label>
      <input
        className="border border-black mb-2"
        type="text"
        id="species"
        name="species"
      />
      <label className="font-semibold" htmlFor="breed">
        Breed
      </label>
      <input
        className="border border-black mb-2"
        type="text"
        id="breed"
        name="breed"
      />
      <label className="font-semibold" htmlFor="weight">
        Weight
      </label>
      <input
        className="border border-black mb-2"
        type="number"
        id="weight"
        name="weight"
      />
    </FormWrapper>
  );
}
