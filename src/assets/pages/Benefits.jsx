import React from "react";
import img1 from "../image/B1.jpg";
import img2 from "../image/B2.jpg";
import img3 from "../image/B3.jpg";
import img4 from "../image/B4.jpg";
import img5 from "../image/B5.jpg";
import img6 from "../image/B7.jpg";
import img7 from "../image/B6.jpg";


export default function Benefits() {
  return (
    <div className="p-10 w-[1440px]">
      <section className="py-16 bg-black text-white border-t border-neutral-700">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-2">
        <span className="text-8xl text-red-600">»</span> Health Benefits of <span className="text-red-500">Gym Activities</span>
      </h2>

      <div className="flex flex-col gap-16">
        {/* Benefit Card 1 */}
        <div className="flex flex-col md:flex-row gap-40 items-center">
          <div className="relative w-[502px] mt-5 h-[378px]">
            <img src={img1} alt="Muscle Gain" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-3xl w-[104px] h-[77px] rounded-xl flex items-center justify-center shadow-lg">01</div>
            <h4 className="text-2xl font-extrabold mt-5 text-center text-white">Muscle Gain</h4>
          </div>
          <div className="w-[536px] h-[200px] border border-white rounded-[10px] flex flex-col items-center justify-center text-center px-4">
            <p className="text-2xl text-gray-300">
              Strength training builds lean muscle mass helping improve strength, posture, and physique.
            </p>
          </div>
        </div>

        {/* Benefit Card 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-40 items-center">
          <div className="relative w-[502px] mt-5 h-[378px]">
            <img src={img2} alt="Fat Loss" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-3xl w-[104px] h-[77px] rounded-xl flex items-center justify-center shadow-lg">02</div>
            <h4 className="text-2xl font-extrabold mt-5 text-center text-white">Fat Loss</h4>
          </div>
          <div className="w-[536px] h-[200px] border border-white rounded-[10px] flex flex-col items-center justify-center text-center px-4">
            <p className="text-2xl text-gray-300">
              Cardio sessions and HIIT workouts are great for burning stored fat and improving metabolism.
            </p>
          </div>
        </div>

        {/* Benefit Card 3 */}
        <div className="flex flex-col md:flex-row gap-40 items-center">
          <div className="relative w-[502px] mt-5 h-[378px]">
            <img src={img3} alt="Endurance" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-3xl w-[104px] h-[77px] rounded-xl flex items-center justify-center shadow-lg">03</div>
             <h4 className="text-2xl font-extrabold mt-5 text-center text-white">Endurance Improvement</h4>
             </div>
          <div className="w-[536px] h-[200px] border border-white rounded-[10px] flex flex-col items-center justify-center text-center px-4">
            <p className="text-2xl text-gray-300">
              Regular cardio improves stamina, cardiovascular health, and lung capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
<section className="py-16 bg-black text-white border-t border-neutral-700">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-2">
      <span className="text-red-600">»</span> Tips for Maintaining a <span className="text-red-500">Healthy Life Style</span>
    </h2>

    <div className="flex flex-col md:flex-row  mt-10 gap-40 items-center">
      <img src={img4} alt="Healthy Tips" className="w-[502px] h-[378px] mt-5 rounded-xl" />
      <ul className="list-disc text-xl text-gray-300 pl-6  space-y-12">
        <li>Stay consistent with your workout routine</li>
        <li>Drink at least 2–3 liters of water every day</li>
        <li>Get enough 7–8 hours of quality sleep</li>
        <li>Include fiber-rich fruits and vegetables</li>
        <li>Avoid processed foods and high sugar foods</li>
      </ul>
    </div>
  </div>
</section>
<section className="py-16 bg-black text-white border-t border-neutral-700">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-extrabold mb-12 flex items-center gap-2">
      <span className="text-red-600">»</span> Nutrition & <span className="text-red-500">Diet Recommendations</span>
    </h2>

    <div className="flex flex-col gap-16">
      {/* Nutrition Card 1 */}
      <div className="flex flex-col md:flex-row gap-40 items-center">
        <div className="relative w-[502px] mt-5 h-[378px]">
          <img src={img5} alt="Protein" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-3xl w-[104px] h-[77px] rounded-xl flex items-center justify-center shadow-lg">
            01
          </div>
          <h4 className="text-2xl font-extrabold mt-5 text-center text-white">Protein for Muscle Growth</h4>
        </div>
        <div className="w-[536px] h-[200px] border border-white rounded-[10px] flex flex-col items-center justify-center text-center px-4">
          <p className="text-2xl text-gray-300">
            Include lean meat, eggs, dairy, and plant-based protein sources daily.
          </p>
        </div>
      </div>

      {/* Nutrition Card 2 */}
      <div className="flex flex-col md:flex-row-reverse gap-40 items-center">
        <div className="relative w-[502px] mt-5 h-[378px]">
          <img src={img6} alt="Fats" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-3xl w-[104px] h-[77px] rounded-xl flex items-center justify-center shadow-lg">
            02
          </div>
          <h4 className="text-2xl font-extrabold mt-5 text-center text-white">Healthy Fats for Energy</h4>
        </div>
        <div className="w-[536px] h-[200px] border border-white rounded-[10px] flex flex-col items-center justify-center text-center px-4">
          <p className="text-2xl text-gray-300">
            Consume avocado, nuts, and olive oil for sustained energy.
          </p>
        </div>
      </div>

      {/* Nutrition Card 3 */}
      <div className="flex flex-col md:flex-row gap-40 items-center">
        <div className="relative w-[502px] mt-5 h-[378px]">
          <img src={img7} alt="Carbs" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute bottom-0 bg-red-600 text-white font-extrabold text-3xl w-[104px] h-[77px] rounded-xl flex items-center justify-center shadow-lg">
            03
          </div>
          <h4 className="text-2xl font-extrabold mt-5 text-center text-white">Carbs for Fuel</h4>
        </div>
        <div className="w-[536px] h-[200px] border border-white rounded-[10px] flex flex-col items-center justify-center text-center px-4">
          <p className="text-2xl text-gray-300">
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

