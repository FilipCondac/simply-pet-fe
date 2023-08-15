"use client";
import React from "react";
import { useMultistepForm } from "../util/useMultistepForm";
import FormWrapper from "./FormWrapper";
import PetDetailsForm from "./PetDetailsForm";
import PetMedicalForm from "./PetMedicalForm";
import PetVetDetailsForm from "./PetVetDetailsForm";

export default function CreatePet(): React.ReactElement {
  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PetDetailsForm />,
      <PetMedicalForm />,
      <PetVetDetailsForm />,
    ]);

  return (
    <div className="relative bg-white border border-black p-2 m-1  text-black my-auto  w-1/2 mx-auto">
      <form className="flex flex-col">
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
          <button onClick={next} type="button">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}
