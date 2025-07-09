import React from "react";
import p1 from "../image/a2.jpg";
import p2 from "../image/a3.jpg";
import p3 from "../image/a4.jpg";
import p4 from "../image/a5.jpg";
import p5 from "../image/p6.jpg";
import p6 from "../image/p4.jpg";

export default function Benifits() {
  const activities = [
    {
      id: "01",
      title: "Weightlifting",
      guidance: "Start with lighter weights, maintain proper form, and increase gradually.",
      benefit: "Improves muscle strength, bone density, and metabolism.",
      image: p1,
    },
    {
      id: "02",
      title: "Cycling",
      guidance: "Maintain a consistent resistance pace, and track endurance goals.",
      benefit: "Boosts cardiovascular endurance, burns calories, and strengthens legs.",
      image: p2,
    },
    {
      id: "03",
      title: "Functional Training",
      guidance: "Focus on compound movements like squats, lunges, and push-ups.",
      benefit: "Improves flexibility, stability, and core strength.",
      image: p3,
    },
    {
      id: "04",
      title: "Cross Fit Training",
      guidance: "Perform high-intensity functional movements using power and stamina.",
      benefit: "Builds endurance, burns fat, and improves agility.",
      image: p4,
    },
    {
      id: "05",
      title: "Cardio Training",
      guidance: "Include running, jump rope, and rowing to boost heart health.",
      benefit: "Increases stamina, improves lung capacity, and burns fat.",
      image: p5,
    },
    {
      id: "06",
      title: "Yoga",
      guidance: "Start with basic poses, focus on breathing, and increase flexibility over time.",
      benefit: "Reduces stress, improves posture, and enhances flexibility.",
      image: p6,
    },
  ];

 return (
  <>
    <div className="w-full  mt-8 border-t border-neutral-700" />
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-2">
          <span className="text-red-600">»</span> Gym <span className="text-red-500">Activities</span>
        </h2>

        <div className="flex flex-col gap-20">
          {activities.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-start gap-30 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image with Badge and Title */}
              <div className="relative w-full max-w-[502px]">
                <div className="relative w-full h-[378px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                  <div className="absolute bottom-0 left-0 w-[104px] h-[77px] bg-red-600 text-white text-4xl font-bold rounded-3xl flex items-center justify-center shadow-lg">
                    {item.id}
                  </div>
                </div>
                <p className="mt-4 text-center text-2xl font-extrabold text-white">
                  {item.title}
                </p>
              </div>

              {/* Guidance & Benefits Boxes */}
<div className="flex flex-col gap-6 w-full max-w-[536px]">
  {/* Guidance */}
  <div className="border border-white rounded-lg p-5 h-[177px] flex flex-col justify-center items-center text-center">
    <p className="text-white text-sm">
      <span className="text-red-500 text-2xl font-extrabold">Guidance: </span>
      {item.guidance}
    </p>
  </div>

  {/* Benefits */}
  <div className="border border-white rounded-lg p-5 h-[177px] flex flex-col justify-center items-center text-center">
    <p className="text-white text-sm">
      <span className="text-red-500 text-2xl font-extrabold">Benefits: </span>
      {item.benefit}
    </p>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);
}