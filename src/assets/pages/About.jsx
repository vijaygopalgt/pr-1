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

const facilityData = [
  { image: F1,  subtitle: "Modern Equipments" },
  { image: F2,  subtitle: "Relaxation & Spa Zone " },
  { image: F3,  subtitle: "Locker Facility" },
  { image: F4,  subtitle: "Group Training" },
];

export default function About() {
  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % facilityData.length);
  }, 1000); // every 1s

  return () => clearInterval(interval); // clean up on unmount
}, []);



  const getIndex = (offset) => (current + offset + facilityData.length) % facilityData.length;

  return (
    <div className="p-10">
      <div className="w-full border-t border-neutral-700 " />
      <section className="bg-black text-white py-16 px-4">
        {/* About Us Header */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-2">
            <span className="text-red-600">»</span> About <span className="text-red-500">Us</span>
          </h2>

          {/* Mission & Values + Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: Mission & Values */}
            <div className="flex flex-col gap-6 w-full max-w-[536px]">
              <div className="relative border border-white rounded-lg p-6 h-[240px] text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 px-6 py-2 rounded-md">
                  <h3 className="text-lg font-bold text-white uppercase">Mission</h3>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-gray-300">
                  At Shadow Strength gym, we believe in empowering individuals to achieve their fitness goals through
                  <span className="text-red-500 font-medium"> expert guidance, state-of-the-art facilities</span> and a
                  <span className="text-red-500 font-medium"> supportive community</span>.
                </p>
              </div>

              <div className="relative border border-white rounded-lg p-6 h-[120px] text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 px-6 py-2 rounded-md">
                  <h3 className="text-lg font-bold text-white uppercase">Values</h3>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-gray-300">
                  Our motto is <span className="text-red-500 font-medium">Train smart, Stay Fit, Live Strong.</span>
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full max-w-[500px]">
              <img
                src={a1}
                alt="Gym Training"
                className="rounded-xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Gym Facilities Carousel */}
<div className="w-[1440px]  mx-auto  relative overflow-hidden">
  <div className="w-full border-t border-neutral-700 " />
  <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-2">
    <span className="text-red-600">»</span> Our <span className="text-red-500">Gym Facilities</span>
  </h2>

  <div className="flex items-center justify-center mt-30 h-[400px] gap-10 transition-all duration-700 ease-in-out">
    {/* Left Image */}
    <div className="w-[300px] h-[400px] rounded-xl overflow-hidden opacity-60 scale-90 transition-all duration-700">
      <img
        src={facilityData[getIndex(-1)].image}
        alt="Prev"
        className="w-[670px] h-[385px] object-cover rounded-xl"
      />
    </div>

    {/* Center Image */}
    <div className="w-[540px] h-[520px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700">
      <img
        src={facilityData[current].image}
        alt={facilityData[current].title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Image */}
    <div className="w-[300px] h-[400px] rounded-xl overflow-hidden opacity-60 scale-90 transition-all duration-700">
      <img
        src={facilityData[getIndex(1)].image}
        alt="Next"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>

  {/* Title and Subtitle below the carousel */}
  <div className="text-center mt-4 transition-all duration-700">
    <p className="text-gray-300 mt-19 text-extrabold text-2xl">{facilityData[current].subtitle}</p>
  </div>
</div>


        {/* Experts Section */}
        <div className="max-w-6xl mx-auto">
          <div className="w-full  border-t border-neutral-700 " />
          <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-2">
            <span className="text-red-600">»</span> Our <span className="text-red-500">Experts</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
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
                  className="w-[219px] h-[171px] object-cover rounded-xl mx-auto mt-9"
                />
                <div className="py-4 px-3 text-center text-white">
                  <h4 className="font-semibold text-lg">{expert.name}</h4>
                </div>
                <div className="bg-red-600 text-white text-center py-2 px-3 w-[267px] h-[107px] font-medium text-sm rounded-b-lg">
                  ({expert.experience})
                  <p className="text-sm text-gray-300 mt-1">{expert.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
