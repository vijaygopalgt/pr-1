import React, { useState } from "react";
import TrainerPopupModal from "../components/TrainerPopupModal";
import e1 from "../image/E1.jpg";
import e2 from "../image/E2.jpg";
import e3 from "../image/E3.png";
import e4 from "../image/E4.png";
import p1 from "../image/p1.jpg";
import p2 from "../image/p2.jpg";
import p3 from "../image/a5.jpg";
import p4 from "../image/p4.jpg";
import p5 from "../image/p5.jpg";

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
        image:e4,
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
        image:e2,
      },
    },
  ];

  const selectedTrainer = programs.find(
    (program) => program.id === selectedTrainerId
  )?.trainer;

  return (
    <>
      <div className="w-full mt-8 border-t border-neutral-700" />
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="text-red-600">»</span> Training{" "}
            <span className="text-red-500">Programs</span>
          </h2>

          <div className="flex flex-col gap-35">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`flex flex-col lg:flex-row items-center gap-25 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full max-w-[502px]">
                  <div className="relative w-full h-[378px]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0  w-[104px] h-[77px] bg-red-600 text-white text-4xl font-bold rounded-3xl flex items-center justify-center">
                      {program.id}
                    </div>
                  </div>

                  <h4 className="mt-4 text-white text-2xl font-extrabold text-center">
                    {program.title}
                  </h4>
                </div>

                {/* Text Section */}
                <div className="w-full max-w-[536px] h-[293px] border border-white rounded-[10px] p-6 flex flex-col items-center justify-between text-center">
                  <div className="w-[409px] h-[88px] mt-10 italic flex items-center justify-center">
                    <p className="text-white  text-xl">{program.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTrainerId(program.id)}
                    className="text-sm w-[187px] h-[45px] mb-10 bg-[#D70E0E] rounded-full"
                  >
                    View Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}
      {selectedTrainer && (
        <TrainerPopupModal
          trainer={selectedTrainer}
          onClose={() => setSelectedTrainerId(null)}
        />
      )}
    </>
  );
}
