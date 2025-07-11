import React, { useState } from "react";
import P7 from "../image/p7.jpg";
import P8 from "../image/p8.jpg";
import P9 from "../image/p9.jpg";
import P01 from "../image/p01.jpg";
import P02 from "../image/p02.jpg";
import P03 from "../image/p03.jpg";
import P04 from "../image/p04.jpg";

const testimonials = [
  { name: "Arjun", image: P7, review: "Great equipment, friendly trainers!" },
  { name: "Priya", image: P8, review: "I love the energy and support here. Best gym ever!" },
  { name: "Rahul", image: P9, review: "This gym transformed my life! Amazing trainers and great environment!" },
  { name: "Dharun", image: P01, review: "The trainers here are amazing, and the equipment is top-notch." },
  { name: "Pooja", image: P02, review: "I love the yoga and HIIT sessions. Very supportive trainers!" },
  { name: "Rishi", image: P03, review: "FITA Gym helped me transform my lifestyle. Group sessions are fantastic!" },
  { name: "Alex David", image: P04, review: "This gym transformed my life! Amazing trainers and great environment!" },
];

export default function TestimonialsSection() {
  const cardWidth = 333 + 39; // card width + gap
  const visibleCards = 2.5;
  const [index, setIndex] = useState(0);
  const maxIndex = testimonials.length - visibleCards;

  const handleNext = () => {
    if (index < maxIndex) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full py-20 bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-red-500 mb-10 flex items-center gap-2">
          <span className="text-6xl text-red-600">»</span> Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Text */}
          <div className="max-w-md">
            <p className="italic text-2xl leading-relaxed text-white">
              “What our Member Says! <br />
              <span className="text-red-500">Real experiences</span> from our{" "}
              <span className="text-red-500">valued members</span>”
            </p>
            <p className="text-xl mt-10 text-white">Give Your own Review!</p>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 mt-6 rounded-full text-lg">
              Write Review
            </button>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="overflow-hidden w-[870px]"> {/* 333*2 + half card + gap */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${index * cardWidth}px)`,
                }}
              >
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0"
                    style={{
                      width: "333px",
                      height: "459px",
                      marginRight: "39px",
                    }}
                  >
                    <div className="bg-[#121212] border border-gray-600 rounded-[20px] p-[25px_24px] h-full text-center shadow-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[273px] h-[160px] rounded-lg object-bottom mb-4"
                      />
                      <h4 className="text-white mt-5 font-semibold text-2xl">{item.name}</h4>
                      <p className="text-yellow-500 text-3xl text-center mt-10 mb-2">★★★★★</p>
                      <p className="text-gray-400 mt-10 text-xl">{item.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrev}
                disabled={index <= 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                  index <= 0
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                ❮
              </button>
              <button
                onClick={handleNext}
                disabled={index >= maxIndex}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                  index >= maxIndex
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
