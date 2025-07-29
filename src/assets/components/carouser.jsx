import React, { useEffect, useState } from "react";
import p1 from "../image/p1.jpg";
import p2 from "../image/p2.jpg";
import p6 from "../image/p6.jpg";
import p4 from "../image/p4.jpg";
import AR from "../image/Ar.png";

const offerData = [
  { id: 1, title: "Strength Training", highlight: p1 },
  { id: 2, title: "Cross Fit Training", highlight: p2 },
  { id: 3, title: "Cardio Training", highlight: p6 },
  { id: 4, title: "Yoga", highlight: p4 },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offerData.length);
    }, 3000); // 3-second interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 bg-black text-white border-t border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-[20px] md:text-[28px] font-bold text-center md:text-left">
          <span className="flex items-center gap-2 whitespace-nowrap justify-center md:justify-start text-white">
            <img
              src={AR}
              alt="Gym Training"
              className="w-[44px] h-[44px] md:w-[60px] md:h-[60px]"
            />
            What <span className="text-[#D70E0E]">We Offer?</span>
          </span>
        </h2>

        {/* Carousel */}
        <div className="flex justify-center items-end gap-4 mt-10 sm:gap-6 md:gap-8 overflow-hidden sm:overflow-x-auto scrollbar-hide">
          {offerData.map((item, index) => {
            const isActive = index === current;

            return (
              <div
                key={item.id}
                className={`relative rounded-[14px] sm:rounded-[20px] overflow-hidden transition-all duration-700 ease-in-out flex flex-col items-center shrink-0
                  ${isActive ? "block" : "hidden"}
                  sm:block
                  ${isActive
                    ? "w-[352px] sm:w-[360px] md:w-[502px] h-[374px] md:h-[378px]"
                    : "sm:w-[180px] md:w-[149px] sm:h-[320px] md:h-[378px] grayscale opacity-60"
                  }`}
              >
                {/* Image Section */}
                <div className="relative w-full">
                  <img
                    src={item.highlight}
                    alt={item.title}
                    className="w-[352px] h-[265px] sm:w-full sm:h-[300px] object-cover rounded-[14px] sm:rounded-[20px]"
                  />
                  {/* ID Box */}
                  <div className="absolute bottom-0 
                    w-[80px] h-[60px] md:w-[104px] md:h-[77px] 
                    bg-[#D70E0E] text-white text-3xl md:text-4xl font-bold 
                    rounded-2xl md:rounded-3xl flex items-center justify-center">
                    {item.id}
                  </div>
                </div>

                {/* Title and Progress Bar */}
                <div className="text-center mt-4">
                  <h4
                    className={`font-bold ${
                      isActive
                        ? "text-white text-lg sm:text-xl"
                        : "text-gray-400 text-xs sm:text-sm"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {/* Progress Bar */}
<div
  key={current} // <-- This forces re-render to restart animation
  className="mt-2 h-[4px] w-[347px] sm:w-[240px] md:w-[499px] rounded-full bg-gray-600 relative overflow-hidden mx-auto"
>
  <div
    className={`absolute top-0 left-0 h-full bg-[#D70E0E] rounded-full transition-all duration-[3000ms] ease-linear w-full`}
  />
</div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
