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
          <div key={index} className="border border-black mb-5 p-2">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={entry.date}
              onChange={(event) => handleInputChange(index, event)}
              required
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={entry.description}
              onChange={(event) => handleInputChange(index, event)}
              required
            />

            <label>Treatment:</label>
            <textarea
              className="border border-black ml-2"
              name="treatment"
              value={entry.treatment}
              onChange={(event) => handleInputChange(index, event)}
              required
            />
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
