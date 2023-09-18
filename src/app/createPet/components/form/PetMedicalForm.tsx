"use client";
import React from "react";
import FormWrapper from "./FormWrapper";

type MedicalEntry = {
  date: string;
  description: string;
  treatment: string;
};

type MedicalHistoryProps = {
  medicalHistory: MedicalEntry[];
  updateMedicalHistory: (history: MedicalEntry[]) => void;
};

export default function PetMedicalForm({
  medicalHistory,
  updateMedicalHistory,
}: MedicalHistoryProps) {
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const values = [...medicalHistory];
    values[index][event.target.name] = event.target.value;
    updateMedicalHistory(values);
  };

  const handleAddFields = () => {
    const values = [
      ...medicalHistory,
      { date: "", description: "", treatment: "" },
    ];
    updateMedicalHistory(values);
  };

  const handleRemoveFields = () => {
    const values = [...medicalHistory];
    values.pop();

    updateMedicalHistory(values);
  };

  return (
    <FormWrapper title="Medical History">
      <div>
        {medicalHistory.map((entry, index) => (
          <div key={index} className="flex-col border border-black mb-5 p-4">
            <div className="flex mb-5">
              <label className="w-1/4">Date:</label>
              <input
                type="date"
                name="date"
                className="border border-black ml-2 w-3/4"
                value={entry.date}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </div>
            <div className="flex mb-5">
              <label className="w-1/4">Description:</label>
              <textarea
                name="description"
                value={entry.description}
                className="border border-black ml-2 w-3/4"
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </div>
            <div className="flex">
              <label className="w-1/4">Treatment:</label>
              <textarea
                className="border border-black ml-2 w-3/4"
                name="treatment"
                value={entry.treatment}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleAddFields}>
        Add another entry
      </button>
      <button type="button" onClick={handleRemoveFields}>
        Remove last entry
      </button>
    </FormWrapper>
  );
}
