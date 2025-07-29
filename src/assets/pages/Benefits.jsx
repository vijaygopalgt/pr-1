import React from "react";
import img1 from "../image/B1.jpg";
import img2 from "../image/B2.jpg";
import img3 from "../image/B3.jpg";
import img4 from "../image/B4.jpg";
import img5 from "../image/B5.jpg";
import img6 from "../image/B7.jpg";
import img7 from "../image/B6.jpg";
import AR from "../image/Ar.png";

export default function Benefits() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
      {/* ================= Section 1: Gym Benefits ================= */}
      <section className="py-10 md:py-16 bg-black text-white border-t border-neutral-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-10 flex flex-wrap items-center gap-2">
            <img
                                  src={AR}
                                      alt="Gym Training"
                                      className=" w-[74px] h-[74px] "/> 
           <span className=" mt-5" > Health Benefits of</span > <span className="text-[#D70E0E] mt-5">Gym Activities</span>
          </h2>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Benefit Card 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-40">
              <div className="relative w-full md:w-[502px] h-[240px] sm:h-[300px] md:h-[378px]">
                <img src={img1} alt="Muscle Gain" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-xl sm:text-2xl md:text-3xl w-[70px] sm:w-[90px] md:w-[104px] h-[50px] sm:h-[65px] md:h-[77px] rounded-xl flex items-center justify-center shadow-lg">
                  01
                </div>
                <h4 className="md:text-[32px] font-bold mt-4 mb-4 text-center bg-gradient-to-b from-[#FAFAFA] to-[#0A0A0A] bg-clip-text text-transparent">
                  Muscle Gain
                </h4>

              </div>
              <div className="w-full md:w-[536px] min-h-[140px] sm:min-h-[160px] md:h-[200px] border border-white rounded-[10px] flex items-center justify-center text-center px-4">
                <p className="text-base sm:text-lg md:text-2xl italic text-white">
                  Strength training builds lean muscle mass helping improve strength, posture, and physique.
                </p>
              </div>
            </div>

            {/* Benefit Card 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-40">
              <div className="relative w-full md:w-[502px] h-[240px] sm:h-[300px] md:h-[378px]">
                <img src={img2} alt="Fat Loss" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-xl sm:text-2xl md:text-3xl w-[70px] sm:w-[90px] md:w-[104px] h-[50px] sm:h-[65px] md:h-[77px] rounded-xl flex items-center justify-center shadow-lg">
                  02
                </div>
                <h4 className="md:text-[32px] font-bold mt-4 mb-4 text-center bg-gradient-to-b from-[#FAFAFA] to-[#0A0A0A] bg-clip-text text-transparent">
                  Fat Loss
                </h4>
              </div>
              <div className="w-full md:w-[536px] min-h-[140px] sm:min-h-[160px] md:h-[200px] border border-white rounded-[10px] flex items-center justify-center text-center px-4">
                <p className="text-base sm:text-lg md:text-2xl italic text-white">
                  Cardio sessions and HIIT workouts are great for burning stored fat and improving metabolism.
                </p>
              </div>
            </div>

            {/* Benefit Card 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-40">
              <div className="relative w-full md:w-[502px] h-[240px] sm:h-[300px] md:h-[378px]">
                <img src={img3} alt="Endurance" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-xl sm:text-2xl md:text-3xl w-[70px] sm:w-[90px] md:w-[104px] h-[50px] sm:h-[65px] md:h-[77px] rounded-xl flex items-center justify-center shadow-lg">
                  03
                </div>
                <h4 className="md:text-[32px] font-bold mt-4 mb-4 text-center bg-gradient-to-b from-[#FAFAFA] to-[#0A0A0A] bg-clip-text text-transparent">
                  Endurance Improvement
                </h4>
              </div>
              <div className="w-full md:w-[536px] min-h-[140px] sm:min-h-[160px] md:h-[200px] border border-white rounded-[10px] flex items-center justify-center text-center px-4">
                <p className="text-base sm:text-lg md:text-2xl italic text-white">
                  Regular cardio improves stamina, cardiovascular health, and lung capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Section 2: Healthy Lifestyle Tips ================= */}
      <section className="py-10 md:py-16 mt-7 bg-black text-white border-t border-neutral-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-10 flex flex-wrap items-center gap-2">
            <span className="text-red-600">»</span> Tips for Maintaining a <span className="text-red-500">Healthy Life Style</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-40 mt-4 md:mt-10">
            <img
              src={img4}
              alt="Healthy Tips"
              className="w-full md:w-[502px] h-[240px] sm:h-[300px] md:h-[378px] rounded-xl object-cover"
            />
            <ul className="list-disc pl-5 sm:pl-6 space-y-4 sm:space-y-6 md:space-y-12 text-base sm:text-lg md:text-xl text-gray-300">
              <li>Stay consistent with your workout routine</li>
              <li>Drink at least 2–3 liters of water every day</li>
              <li>Get enough 7–8 hours of quality sleep</li>
              <li>Include fiber-rich fruits and vegetables</li>
              <li>Avoid processed foods and high sugar foods</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= Section 3: Nutrition Tips ================= */}
      <section className="py-10 md:py-16 bg-black text-white border-t border-neutral-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-10 flex flex-wrap items-center gap-2">
            <span className="text-red-600">»</span> Nutrition & <span className="text-red-500">Diet Recommendations</span>
          </h2>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Nutrition Card 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-40">
              <div className="relative w-full md:w-[502px] h-[240px] sm:h-[300px] md:h-[378px]">
                <img src={img5} alt="Protein for Muscle Growth" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-xl sm:text-2xl md:text-3xl w-[70px] sm:w-[90px] md:w-[104px] h-[50px] sm:h-[65px] md:h-[77px] rounded-xl flex items-center justify-center shadow-lg">
                  01
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold mt-4 text-center">
                  Protein for Muscle Growth
                </h4>
              </div>
              <div className="w-full md:w-[536px] min-h-[140px] sm:min-h-[160px] md:h-[200px] border border-white rounded-[10px] flex items-center justify-center text-center px-4">
                <p className="text-base sm:text-lg md:text-2xl text-gray-300">
                  Include lean meat, eggs, dairy, and plant-based protein sources daily.
                </p>
              </div>
            </div>

            {/* Nutrition Card 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-40">
              <div className="relative w-full md:w-[502px] h-[240px] sm:h-[300px] md:h-[378px]">
                <img src={img6} alt="Healthy Fats for Energy" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-xl sm:text-2xl md:text-3xl w-[70px] sm:w-[90px] md:w-[104px] h-[50px] sm:h-[65px] md:h-[77px] rounded-xl flex items-center justify-center shadow-lg">
                  02
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold mt-4 text-center">
                  Healthy Fats for Energy
                </h4>
              </div>
              <div className="w-full md:w-[536px] min-h-[140px] sm:min-h-[160px] md:h-[200px] border border-white rounded-[10px] flex items-center justify-center text-center px-4">
                <p className="text-base sm:text-lg md:text-2xl text-gray-300">
                  Consume avocado, nuts, and olive oil for sustained energy.
                </p>
              </div>
            </div>

            {/* Nutrition Card 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-40">
              <div className="relative w-full md:w-[502px] h-[240px] sm:h-[300px] md:h-[378px]">
                <img src={img7} alt="Carbs for Fuel" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-xl sm:text-2xl md:text-3xl w-[70px] sm:w-[90px] md:w-[104px] h-[50px] sm:h-[65px] md:h-[77px] rounded-xl flex items-center justify-center shadow-lg">
                  03
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold mt-4 text-center">
                  Carbs for Fuel
                </h4>
              </div>
              <div className="w-full md:w-[536px] min-h-[140px] sm:min-h-[160px] md:h-[200px] border border-white rounded-[10px] flex items-center justify-center text-center px-4">
                <p className="text-base sm:text-lg md:text-2xl text-gray-300">
                  Choose whole grains, fruits, and vegetables to keep energy flowing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
