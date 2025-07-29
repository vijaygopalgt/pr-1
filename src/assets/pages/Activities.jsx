import React from "react";
import p1 from "../image/a2.jpg";
import p2 from "../image/a3.jpg";
import p3 from "../image/a4.jpg";
import p4 from "../image/a5.jpg";
import p5 from "../image/p6.jpg";
import p6 from "../image/p4.jpg";
import AR from "../image/Ar.png";

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
      guidance: "Adjust seat height, start with warm-up, and maintain steady speed.",
      benefit: "Enhances cardiovascular endurance, burns calories, and strengthens  legs.",
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
      guidance: "Perform high-intensity functional movements with proper rest  intervals.",
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
    
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-2">
          <img
                                src={AR}
                                    alt="Gym Training"
                                    className=" w-[74px] h-[74px] "/>  Gym <span className="text-red-500">Activities</span>
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
                    className="w-full h-full mb-4 object-cover rounded-[24px]"
                  />
                  <div className="absolute bottom-0 left-0 w-[104px] h-[77px] bg-[#D70E0E] text-white text-4xl font-bold rounded-3xl flex items-center justify-center shadow-lg">
                    {item.id}
                  </div>
                </div>
                <p className="text-[32px] font-bold mt-8  text-center bg-gradient-to-b from-[#FAFAFA] to-[#0A0A0A] bg-clip-text text-transparent">
                  {item.title}
                </p>
              </div>

              {/* Guidance & Benefits Boxes */}
<div className="flex flex-col  w-full max-w-[536px]">
  {/* Guidance */}
  <div className="border border-white rounded-lg p-5 h-[177px] flex flex-col justify-center items-center text-center">
    <p className="text-white italic text-[22px]">
      <span className="text-[#D70E0E] text-[24px] italic">Guidance: </span>
      {item.guidance}
    </p>
  </div>

  {/* Benefits */}
  <div className="border border-white rounded-lg p-5 h-[177px] flex flex-col justify-center items-center text-center">
    <p className="text-white italic text-[22px]">
      <span className="text-[#D70E0E] text-[24px] italic">Benefits: </span>
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