import React from "react";
import FormWrapper from "./FormWrapper";

export default function PetVetDetailsForm(): React.ReactElement {
  return (
    <FormWrapper title="Veterinary Practitioner Details">
      <label className="font-semibold" htmlFor="vetName">
        Vet Name
      </label>
      <input
        className="border border-black mb-2"
        type="text"
        id="vetName"
        name="vetName"
      />
      <label className="font-semibold" htmlFor="vetID">
        Vet ID
      </label>
      <input
        className="border border-black mb-2"
        type="text"
        id="vetID"
        name="vetID"
      />
    </FormWrapper>
  );
}
