/* eslint-disable react/jsx-key */
"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useMultistepForm } from "../util/useMultistepForm";
import PetDetailsForm from "./components/form/PetDetailsForm";
import PetMedicalForm from "./components/form/PetMedicalForm";
import PetVetDetailsForm from "./components/form/PetVetDetailsForm";

type FormData = {
  name: string;
  familyName: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  medicalHistory: {
    date: string;
    description: string;
    treatment: string;
  }[];
  userID: string;
  vetID: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  familyName: "",
  species: "",
  breed: "",
  age: "",
  weight: "",
  medicalHistory: [
    {
      date: "",
      description: "",
      treatment: "",
    },
  ],
  userID: "",
  vetID: "",
};

type MedicalEntry = {
  date: string;
  description: string;
  treatment: string;
};

export default function CreatePet(): React.ReactElement {
  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    async function fetchEmail() {
      try {
        const response = await fetch("/api/user/getUserEmail");
        if (response.ok) {
          const userData = await response.json();
          data.userID = userData.email;
        } else {
          console.error("Failed to fetch email.");
        }
      } catch (error) {
        console.error("An error occurred while fetching the email:", error);
      }
    }

    fetchEmail();
  }, []);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const updateMedicalHistory = (history: MedicalEntry[]) => {
    setData((prev) => ({ ...prev, medicalHistory: history }));
  };

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PetDetailsForm {...data} updateFields={updateFields} />,
      <PetMedicalForm
        medicalHistory={data.medicalHistory}
        updateMedicalHistory={updateMedicalHistory}
      />,
      <PetVetDetailsForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();

    try {
      fetch("/createPet/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
    } catch (error) {
      console.error("An error occurred while creating the pet:", error);
    }
  };

  return (
    <div className="relative bg-white border border-black p-2 m-1  text-black my-auto  w-1/2 mx-auto">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <div className=" absolute top-1 right-1">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="m-1 flex gap-1 justify-end">
          {isFirstStep && (
            <button onClick={back} type="button">
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}
