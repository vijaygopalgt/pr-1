import React from "react";

export default function TrainerPopupModal({ trainer, onClose }) {
  if (!trainer) return null;

  return (
    <div className="fixed inset-0 bg-[#303030]/90 z-50 flex items-center justify-center px-4">
      <div className="bg-neutral-900 text-white p-6 rounded-[16px] w-full max-w-[897px] max-h-[95vh] overflow-y-auto relative flex flex-col md:flex-row gap-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✕
        </button>

        {/* Left: Training Levels */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:px-[60px] gap-6">
          <h3 className="text-xl font-bold text-center text-red-500">
            Training Level
          </h3>
          <ul className="space-y-6">
            {trainer.levels.map((level, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  0{index + 1}
                </span>
                <span className="text-white font-medium text-sm sm:text-base">
                  {level}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Trainer Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:px-[60px]">
          <h2 className="text-lg font-bold text-red-500 mb-4">
            Respective Trainer
          </h2>

          <div className="w-full max-w-[220px] border border-gray-600 flex flex-col items-center rounded-xl">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-[155px] h-[121px] object-cover rounded-xl mt-4"
            />

            <div className="text-center text-white mt-4 px-2">
              <h3 className="font-bold text-base">{trainer.name}</h3>
            </div>

            <div className="bg-red-600 text-white mt-4 w-full h-[77px] rounded-b-md text-xs flex flex-col items-center justify-center px-2">
              <h3 className="text-xs font-bold text-center">{trainer.title}</h3>
              <p className="mt-1 text-xs font-bold">({trainer.experience})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
