import React from "react";
import FormWrapper from "./FormWrapper";

type VetData = {
  vetID: string;
};

type VetFormPorps = VetData & {
  updateFields: (fields: Partial<VetData>) => void;
};

export default function PetVetDetailsForm({
  vetID,
  updateFields,
}: VetFormPorps): React.ReactElement {
  return (
    <FormWrapper title="Veterinary Practitioner Details">
      <label className="font-semibold" htmlFor="vetName">
        Vet Name
      </label>
      <input
        className="border border-black mb-2"
        placeholder="Dr. Smith"
        type="text"
        id="vetName"
        name="vetName"
      />
      <label className="font-semibold" htmlFor="vetID">
        Vet ID
      </label>
      <input
        className="border border-black mb-2"
        placeholder="#415135"
        type="text"
        id="vetID"
        onChange={(e) => updateFields({ vetID: e.target.value })}
        name="vetID"
      />
    </FormWrapper>
  );
}
