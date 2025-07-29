import React, { useState } from "react";
import TrainerPopupModal from "../components/TrainerPopupModal";
import e1 from "../image/E1.jpg";
import e2 from "../image/E2.jpg";
import e3 from "../image/E3.png";
import e4 from "../image/E4.png";
import p1 from "../image/p1.jpg";
import p2 from "../image/p6.jpg";
import p3 from "../image/a5.jpg";
import p4 from "../image/p4.jpg";
import p5 from "../image/p5.jpg";
import AR from "../image/Ar.png";


export default function Trainings() {
  const [selectedTrainerId, setSelectedTrainerId] = useState(null);

  const programs = [
    {
      id: "01",
      title: "Strength Training",
      description: "Build muscle and increase strength with expert guidance.",
      image: p1,
      trainer: {
        id: "01",
        levels: [
          "Beginner (6 AM - 7 AM)",
          "Intermediate (7 AM - 8 AM)",
          "Advanced (6 PM – 7 PM)",
        ],
        name: "Charles Johnson",
        title: "Strength Training Specialist",
        experience: "3+ Years Of Experience",
        image: e3,
      },
    },
    {
      id: "02",
      title: "Cardio Training",
      description: "Improve endurance and burn calories with high-intensity workouts.",
      image: p2,
      trainer: {
        id: "02",
        levels: [
          "Beginner (7 AM - 8 AM)",
          "Intermediate (6 AM - 7 AM)",
          "Advanced (7 PM – 8 PM)",
        ],
        name: "Bhuvaneswaran",
        title: "Cardio and Endurance coach",
        experience: "4+ Years Of Experience",
        image: e1,
      },
    },
    {
      id: "03",
      title: "Cross Fit Training",
      description: "High intensity training focusing on functional movements.",
      image: p3,
      trainer: {
        id: "03",
        levels: [
          "Beginner (5 PM – 6 PM)",
          "Intermediate (6 PM - 7 PM)",
          "Advanced (7 PM – 8 PM)",
        ],
        name: "Bhuvaneswaran",
        title: "Cardio and Endurance coach",
        experience: "4+ Years Of Experience",
        image: e1,
      },
    },
    {
      id: "04",
      title: "Yoga",
      description: "Relax and improve flexibility with guided yoga sessions.",
      image: p4,
      trainer: {
        id: "04",
        levels: [
          "Beginner (8 AM - 9 AM)",
          "Intermediate (5 PM - 6 PM)",
          "Advanced (6 AM – 7 AM)",
        ],
        name: "Sneha",
        title: "Yoga",
        experience: "4+ Years Of Experience",
        image: e4,
      },
    },
    {
      id: "05",
      title: "HIIT",
      description: "Burn fat and boost metabolism with short, intense workouts.",
      image: p5,
      trainer: {
        id: "05",
        levels: [
          "Beginner (6 PM - 7 PM)",
          "Intermediate (7 PM - 8 PM)",
          "Advanced (8 AM – 9 AM)",
        ],
        name: "Krishnan",
        title: "HIIT Instructor",
        experience: "2+ Years Of Experience",
        image: e2,
      },
    },
  ];

  const selectedTrainer = programs.find(
    (program) => program.id === selectedTrainerId
  )?.trainer;

  return (
    <>
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-2">
            <img
                      src={AR}
                          alt="Gym Training"
                          className=" w-[74px] h-[74px] "/> Training{" "}
            <span className="text-red-500">Programs</span>
          </h2>

          <div className="flex flex-col gap-24 md:gap-35">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`flex flex-col ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                } lg:flex-row items-center gap-10 md:gap-25`}
              >
                {/* Image Section */}
                <div className="w-full max-w-[502px]">
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[378px]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 w-[80px] h-[60px] md:w-[104px] md:h-[77px] bg-red-600 text-white text-3xl md:text-4xl font-bold rounded-2xl md:rounded-3xl flex items-center justify-center">
                      {program.id}
                    </div>
                  </div>

                  <h4 className="text-[32px] font-bold mt-8  text-center bg-gradient-to-b from-[#FAFAFA] to-[#0A0A0A] bg-clip-text text-transparent">
                    {program.title}
                  </h4>
                </div>

                {/* Text Section */}
                <div className="w-full max-w-[536px] border border-white rounded-[10px] p-4 md:p-6 flex flex-col items-center justify-between text-center">
                  <div className="w-full md:w-[409px] min-h-[80px] md:h-[88px] mt-4 md:mt-10 italic flex items-center justify-center">
                    <p className="text-white text-base md:text-xl">{program.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTrainerId(program.id)}
                    className="mt-6 md:mt-0 text-sm w-full sm:w-[187px] h-[45px] mb-4 md:mb-10 bg-[#D70E0E] rounded-full transition-transform hover:scale-105"
                  >
                    View Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Popup */}
      {selectedTrainer && (
        <TrainerPopupModal
          trainer={selectedTrainer}
          onClose={() => setSelectedTrainerId(null)}
        />
      )}
    </>
  );
}
