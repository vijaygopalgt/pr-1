import React from "react";
import img from '../image/img3.jpg'; // Replace with your actual image
import img1 from "../image/v1.png";
import img2 from "../image/v2.png";
import img3 from "../image/v3.png";
import img4 from "../image/v4.png";
import AR from "../image/Ar.png";

export default function WhyChooseUs() {
  return (
    <section className="w-full border-t border-neutral-700 py-12 bg-black text-white">
  <div className="max-w-[1320px] mx-auto px-6 flex flex-col gap-12">
    {/* Heading */}
    <h2 className="text-[20px] md:text-[28px] font-bold text-center md:text-left">
      <span className="flex items-center gap-2 whitespace-nowrap justify-center md:justify-start text-white">
        <img
          src={AR}
          alt="Gym Training"
          className="w-[44px] h-[44px] md:w-[60px] md:h-[60px]" 
        />
        <span>
          Why People <span className="text-[#D70E0E]">Choose Us?</span>
        </span>
      </span>
    </h2>

    {/* Content: Image + Feature Cards */}
    <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
      {/* Left Image */}
      <img
  src={img}
  alt="Choose Us"
  className="w-[365px] h-[315px] sm:w-[525px] sm:h-[451px] object-cover rounded-[20px] shadow-xl p-[6.7px]"
/>


      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 max-w-xl text-sm w-full">
        {/* Card Template */}
        {[ 
          { img: img1, title: "Expert Personal Trainers", text: "Get guided by certified professionals who customize workouts to match your fitness goals.", textSize: "text-[13px]" },
          { img: img2, title: "Advanced Equipments", text: "Train with cutting-edge gym equipment designed for maximum efficiency and performance.", textSize: "text-[12px]" },
          { img: img3, title: "Hygiene & Nutrition", text: "Enjoy a clean and sanitized environment with expert diet recommendations to fuel your progress.", textSize: "text-[12px]" },
          { img: img4, title: "Flexible Plans", text: "Choose from affordable and customizable plans that fit your schedule and fitness needs.", textSize: "text-[13px]" }
        ].map((card, index) => (
          <div
            key={index}
            className="border border-neutral-700 bg-black p-6 sm:p-6 rounded-[20px] 
                       h-[311px] w-[277px] sm:w-auto mx-auto flex flex-col items-center text-center"
          >
            <img src={card.img} alt="Card Icon" className="w-16 h-16 mb-4 mt-5" />
            <h3 className="text-[#FAFAFA] font-bold text-xl mt-3 mb-5">{card.title}</h3>
            <p className={`text-fill text-left ${card.textSize}`}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}

