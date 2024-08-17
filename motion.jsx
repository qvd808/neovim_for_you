"use client";

import { useState, FormEvent } from "react";
import FormInput from "@/components/FormInput";
import VolunteerCard from "./components/VolunteerCard";
import ShiftSelect from "./components/ShiftSelect";

export default function Checkin() {
  const [userName, setUserName] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleCheckinVolunteer = async (e: FormEvent<DELETE_THIS_AND_REPLACE>) => {
    e.preventDefault(DELETE_THIS_WORD);
    try {
      await fetch("/api/checkin", {
        method: "POST",
        body: JSON.stringify({
          userName,
          selectedOption
        })
      });
    } catch (error) {
      // console.log(error);
    }
  };

  const mockInfo = [
    {
      firstName: "   Johnny",
      lastName: "  Test",
      timeIn: "11:10am",
      shift: "PFTP"
    },
    {
      firstName: "Mark",
      lastName: "Hamburg",
      timeIn: "10:00am",
      shift: "PFTP"
    }
  ];

  const mockOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="REPLACE EVERYTHING IN THIS WITH flex flex-col">
      <form
        className="flex justify-between gap-20 px-20 py-10"
        onSubmit={handleCheckinVolunteer}
      >
        <FormInput
          label="Username"
          type="text"
          placeholder="Your Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <ShiftSelect
          options={mockOptions}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          className="col-span-2"
        />
        <button type="submit" className="min-w-[200px]">
          Check In
        </button>
      </form>
      {mockInfo.map((item) => (
        <VolunteerCard
          firstName={item.firstName}
          lastName={item.lastName}
          timeIn={item.timeIn}
          shift={item.shift}
        />
      ))}
    </div>
  );

}
