import React from "react";
import p1 from "../image/p1.jpg";
import p2 from "../image/p2.jpg";
import p3 from "../image/a5.jpg";
import p4 from "../image/p4.jpg";
import p5 from "../image/p5.jpg";

export default function Trainings() {
  const programs = [
    {
      id: "01",
      title: "Strength Training",
      description: "Build muscle and increase strength with expert guidance.",
      image: p1,
    },
    {
      id: "02",
      title: "Cardio Training",
      description: "Improve endurance and burn calories with high-intensity workouts.",
      image: p2,
    },
    {
      id: "03",
      title: "Cross Fit Training",
      description: "High intensity training focusing on functional movements.",
      image: p3,
    },
    {
      id: "04",
      title: "Yoga",
      description: "Relax and improve flexibility with guided yoga sessions.",
      image: p4,
    },
    {
      id: "05",
      title: "HIIT",
      description: "Burn fat and boost metabolism with short, intense workouts.",
      image: p5,
    },
  ];

  return (
  <>
    <div className="w-full mt-8 border-t border-neutral-700" />

    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-red-600">»</span> Training <span className="text-red-500">Programs</span>
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

                {/* Title below the image */}
                <h4 className="mt-4 text-white text-2xl font-extrabold text-center">
                  {program.title}
                </h4>
              </div>

              {/* Text Section */}
              <div className="w-full max-w-[536px] h-[293px] border border-white rounded-[10px] p-6 flex flex-col items-center justify-between text-center">
                <div className="w-[409px] h-[88px] flex items-center justify-center">
                  <p className="text-white text-xl">{program.description}</p>
                </div>
                <button className="text-sm mt-6 bg-transparent border border-red-600 text-red-500 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition">
                  View Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);
}