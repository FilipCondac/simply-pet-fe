import React from "react";

export default function TopSection() {
  return (
    <section className="flex w-full h-96 mt-12">
      <span className="bg-section w-7/12 h-full"></span>
      <div className="flex flex-col text-black w-1/2 mt-5 z-10 p-8">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          On-demand vet care, 24/7.
        </h2>
        <h3 className=" font-semibold  text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-5">
          Online vet appointments.
        </h3>
        <p className=" text-2xl break-before-all">
          Simply Pet connects pet owners to thousands of licenced veterinary
          surgeons & nurses ready to provide the best online vet services
          through video chat appointments 24/7.
        </p>
      </div>
    </section>
  );
}
