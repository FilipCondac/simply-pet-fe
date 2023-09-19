"use client";
import React, { useEffect, useState } from "react";
import MyCalendar from "./components/calendar";
import AppointmentForm from "./components/appointmentForm";
import { PetInterface } from "../types/types";

export default function Appointments() {
  //   const [bookedDates, setBookedDates] = useState([]);
  //   const handleAddAppointment = (date) => {
  //     setBookedDates([...bookedDates, date]);
  //   };

  const [showForm, setShowForm] = useState(false);
  const [petData, setPetData] = useState<PetInterface[]>([]);

  const handleShowForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await fetch("/api/viewPets");
      const petData = await response.json();
      setPetData(petData);
    } catch (error) {
      console.error("An error occurred while fetching the pets:", error);
    }
  };

  return (
    <div className="mt-12 flex-col flex">
      <button
        onClick={handleShowForm}
        className="bg-secondary w-2/12 m-auto mt-10 rounded cursor-pointer text-white mb-3"
      >
        {showForm ? "Close appointment form" : "Book an appointment"}
      </button>
      {showForm ? <AppointmentForm pets={petData} /> : <MyCalendar />}
    </div>
  );
}
