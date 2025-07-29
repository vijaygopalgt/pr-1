import React, { useState, useEffect } from "react";
import a1 from "../image/A1.jpg";
import e1 from "../image/E1.jpg";
import e2 from "../image/E2.jpg";
import e3 from "../image/E3.png";
import e4 from "../image/E4.png";
import F1 from "../image/F1.jpg";
import F2 from "../image/F2.jpg";
import F3 from "../image/F3.jpg";
import F4 from "../image/F4.jpg";
import AR from "../image/Ar.png";

const facilityData = [
  { image: F1, subtitle: "Modern Equipments" },
  { image: F2, subtitle: "Relaxation & Spa Zone" },
  { image: F3, subtitle: "Locker Facility" },
  { image: F4, subtitle: "Group Training" },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % facilityData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset) =>
    (current + offset + facilityData.length) % facilityData.length;

  return (
    <div className="bg-black text-white px-4 md:px-10 py-10">
      {/* About Section */}
      <section className="max-w-7xl mx-auto">
        <div className="h-[74px] w-[236px]">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <img
          src={AR}
              alt="Gym Training"
              className=" w-[74px] h-[74px] "></img> About <span className="text-[#D70E0E] ">Us</span>
        </h2></div>

        <div className="flex flex-col mt-10 lg:flex-row gap-10 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6 w-full max-w-xl">
            <div className="relative border border-white rounded-lg p-6 min-h-[240px] text-center">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 px-6 py-2 rounded-md">
                <h3 className="text-lg font-bold uppercase">Mission</h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-gray-300">
                At Shadow Strength gym, we believe in empowering individuals to achieve their fitness goals through{" "}
                <span className="text-red-500 font-medium">expert guidance, state-of-the-art facilities</span> and a{" "}
                <span className="text-red-500 font-medium">supportive community</span>.
              </p>
            </div>
            <div className="relative border border-white rounded-lg p-6 min-h-[120px] text-center">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 px-6 py-2 rounded-md">
                <h3 className="text-lg font-bold uppercase">Values</h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-gray-300">
                Our motto is{" "}
                <span className="text-red-500 font-medium">Train smart, Stay Fit, Live Strong.</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-md">
            <img
              src={a1}
              alt="Gym Training"
              className="rounded-xl w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="mt-20 max-w-7xl mx-auto px-2">
        <div className="w-full border-t border-neutral-700 mb-8" />
        <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-2">
          <img
          src={AR}
              alt="Gym Training"
              className=" w-[74px] h-[74px] "></img> Our <span className="text-red-600">Gym Facilities</span>
        </h2>

        <div className="relative overflow-x-auto">
          <div className="flex items-center justify-center gap-4 md:gap-10">
            {/* Left */}
            <div className="w-[180px] md:w-[300px] h-[250px] md:h-[400px] opacity-60 scale-90 transition-all duration-700 rounded-xl overflow-hidden">
              <img
                src={facilityData[getIndex(-1)].image}
                alt="Prev"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Center */}
            <div className="w-[311.43px] h-[178.95px] md:w-[540px] md:h-[520px] rounded-[4.65px] md:rounded-2xl overflow-hidden shadow-2xl transition-all duration-700">
              <img
                src={facilityData[current].image}
                alt={facilityData[current].subtitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right */}
            <div className="w-[180px] md:w-[300px] h-[250px] md:h-[400px] opacity-60 scale-90 transition-all duration-700 rounded-xl overflow-hidden">
              <img
                src={facilityData[getIndex(1)].image}
                alt="Next"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <p className="text-center text-lg md:text-2xl text-gray-300 font-semibold mt-6">
            {facilityData[current].subtitle}
          </p>
        </div>
      </section>

      {/* Experts Section */}
      <section className="max-w-7xl mx-auto mt-20 px-2">
        <div className="w-full border-t border-neutral-700 mb-8" />
        <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-2">
          <img
          src={AR}
              alt="Gym Training"
              className=" w-[74px] h-[74px] "></img> Our <span className="text-red-500">Experts</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            {
              name: "Bhuvaneswaran",
              role: "Cardio and Endurance coach",
              experience: "4+ Years Of Experience",
              image: e1,
            },
            {
              name: "Krishnan",
              role: "HIIT Instructor",
              experience: "2+ Years Of Experience",
              image: e2,
            },
            {
              name: "Charles Johnson",
              role: "Strength Training Specialist",
              experience: "3+ Years Of Experience",
              image: e3,
            },
            {
              name: "Sneha",
              role: "Yoga",
              experience: "4+ Years Of Experience",
              image: e4,
            },
          ].map((expert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#111] rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-[180px] h-[160px] object-cover rounded-xl mx-auto mt-6"
              />
              <div className="py-4 px-3 text-center text-white">
                <h4 className="font-semibold text-lg">{expert.name}</h4>
              </div>
              <div className="bg-red-600 text-white text-center py-2 px-3 font-medium text-sm rounded-b-lg">
                ({expert.experience})
                <p className="text-sm text-gray-300 mt-1">{expert.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
