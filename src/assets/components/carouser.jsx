import React, { useEffect, useState } from "react";
import p1 from "../image/p1.jpg";
import p2 from "../image/p2.jpg";
import p6 from "../image/p6.jpg";
import p4 from "../image/p4.jpg";


const offerData = [
  { frame: "Frame 33", label: "01", title: "Strength Training", highlight: p1 },
  { frame: "Frame 34", label: "02", title: "Cross Fit Training", highlight: p2 },
  { frame: "Frame 35", label: "03", title: "Cardio Training", highlight: p6 },
  { frame: "Frame 36", label: "04", title: "Yoga", highlight: p4 },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offerData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 bg-black text-white border-t border-neutral-800">
      <div className="max-w-[1440px] h-[540px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2 uppercase mb-10">
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5" fill="none">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-white">
            What <span className="text-red-600">We Offer?</span>
          </span>
        </h2>

        {/* Carousel Cards */}
        <div className="flex justify-center items-end gap-8">
          {offerData.map((item, index) => {
            const isActive = index === current;

            return (
              <div
                key={index}
                className={`rounded-[20px] overflow-hidden transition-all duration-700 ease-in-out flex flex-col items-center ${
                  isActive ? "w-[502px] h-[378px]" : "w-[149px] h-[378px] grayscale opacity-70"
                }`}
              >
                <img
                  src={item.highlight}
                  alt={item.title}
                  className="w-full h-[300px] object-cover rounded-[20px]"
                />
                <div className="text-center mt-4">
                  <h4 className={`font-bold ${isActive ? "text-white text-xl" : "text-gray-400 text-sm"}`}>
                    {item.title}
                  </h4>
                  {/* Red or Gray Underline */}
                  <div
                    className={`mt-2 h-[4px] rounded-full transition-all duration-700 ${
                      isActive ? "bg-red-600 w-[499px]" : "bg-gray-600 w-[220px]"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
