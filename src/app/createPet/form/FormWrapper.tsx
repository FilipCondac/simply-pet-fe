import React from "react";

type FormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-center text-3xl font-extrabold">{title}</h2>
      {children}
    </>
  );
}
