import React from "react";

export default function TrainerPopupModal({ trainer, onClose }) {
  if (!trainer) return null;

  return (
    <div className="fixed inset-0 bg-[#303030] bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-neutral-900 text-white p-6 rounded-[16px] w-[897px] h-[512px] relative flex">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✕
        </button>

        {/* Left: Training Levels */}
        <div className="w-1/2 flex flex-col justify-center px-[80px] gap-[41.27px]">
          <h3 className="text-xl font-bold text-center text-red-500">
            Training Level
          </h3>
          <ul className="space-y-8 mt-2">
            {trainer.levels.map((level, index) => (
              <li key={index} className="flex items-center gap-5">
                <span className="bg-red-600 w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold">
                  0{index + 1}
                </span>
                <span className="text-white font-medium">{level}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Trainer Info */}
        <div className="w-1/2 flex flex-col justify-center px-[120px]">
          <h2 className="text-lg font-bold text-red-500 ">
            Respective Trainer
          </h2>

          <div className="w-[190px] h-[262px] mt-15 border border-gray-600 flex flex-col items-center">
            {/* Trainer Image */}
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-[155px] h-[121px] object-cover rounded-xl mt-2"
            />

            {/* Name */}
            <div className="text-center text-white mt-4">
              <h3 className="font-bold text-base">{trainer.name}</h3>
            </div>

            {/* Experience */}
            <div className="bg-red-600 text-white mt-4 w-full h-[77px] rounded-md text-xs flex flex-col items-center justify-center px-2">
              <h3 className="text-xs font-bold">{trainer.title}</h3>
              <p className="mt-1 text-xs font-bold">({trainer.experience})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
