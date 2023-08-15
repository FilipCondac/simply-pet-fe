"use client";
import React, { useState } from "react";
import FormWrapper from "./FormWrapper";

export default function MedicalHistoryForm() {
  const [medicalHistory, setMedicalHistory] = useState([
    { date: "", description: "", treatment: "" },
  ]);

  const handleInputChange = (index, event) => {
    const values = [...medicalHistory];
    values[index][event.target.name] = event.target.value;
    setMedicalHistory(values);
  };

  const handleAddFields = () => {
    setMedicalHistory([
      ...medicalHistory,
      { date: "", description: "", treatment: "" },
    ]);
  };

  return (
    <FormWrapper title="Medical History">
      <div>
        {medicalHistory.map((entry, index) => (
          <div key={index} className="border border-black mb-5 p-2">
            <label className="">Date:</label>
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
    </FormWrapper>
  );
}
