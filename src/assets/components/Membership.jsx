import React, { useState } from "react";
import pin from "../image/pl1.png";
import ellipse from "../image/pl2.png";
import line from "../image/pl3.png";
import PaymentModal from "./PaymentModal";
import AR from "../image/Ar.png";

export default function MembershipPlans() {
  const [showModal, setShowModal] = useState(false);

  const plans = [
    {
      title: "Quarterly Plan",
      duration: "(3 Months)",
      price: "₹6500 Only",
      description:
        "Take your fitness to the next level with our Quarterly Plan—designed for consistent progress and results over three months!",
      bgColor: "bg-black",
    },
    {
      title: "Monthly Plan",
      duration: "(1 Month)",
      price: "₹2500 Only",
      description:
        "Stay committed to your fitness with our flexible Monthly Plan—perfect for those who want to train without a long-term commitment!",
      bgColor: "bg-black",
      highlight: true,
    },
    {
      title: "Yearly Plan",
      duration: "(1 Year)",
      price: "₹25000 Only",
      description:
        "Transform your lifestyle with our Yearly Plan—get the best value, unlimited access, and exclusive benefits for long-term fitness success!",
      bgColor: "bg-black",
    },
  ];

  return (
    <section className="w-full py-16 bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[20px] md:text-[28px] font-bold text-center md:text-left">
  <span className="flex items-center gap-2 whitespace-nowrap justify-center md:justify-start text-white">
    <img
      src={AR}
      alt="Gym Training"
      className="w-[44px] h-[44px] md:w-[60px] md:h-[60px]" 
    />
    <span>Choose Your </span>
    <span className="text-[#D70E0E]">Membership Plan</span>
  </span>
</h2>



        {/* Plans Container */}
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3 px-4 md:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border border-[#969696] ${
                index === 0 || index === 2 ? "mt-8" : "mb-0"
              } rounded-[20px] flex flex-col justify-between ${plan.bgColor} ${
                index === 1
                  ? "w-[333px] md:w-[333px] h-[515px] px-6 pt-10 pb-10 mx-auto"
                  : "w-[333px] h-[480px] p-6 pt-10" /* pt-10 so space for pin */
              }`}
            >
              {/* Pin + Ellipse */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative w-[36px] h-[36px]">
                  <img
                    src={ellipse}
                    alt="ellipse"
                    className="absolute w-[24px] h-[24px] top-[6px] left-0 z-0 mt-3"
                  />
                  <img
                    src={pin}
                    alt="pin"
                    className="w-[36px] h-[36px] relative z-10 left-[6px]"
                  />
                </div>
              </div>

              {/* Plan Title */}
              <div className="w-full flex items-center justify-center rounded-[40px] mt-8 mx-auto text-center">
                <div className="flex flex-col items-center">
                  {plan.highlight ? (
                    <>
                      <div className="w-[332px] bg-[#D70E0E] flex items-center justify-center  opacity-100 h-[55px]">
                        <h3 className="text-[24px] font-bold text-white">{plan.title}</h3>
                      </div>
                      <p className="text-[24px]  mt-4 text-[#D70E0E] font-bold">
                        {plan.duration}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-[24px]  font-bold text-white">{plan.title}</h3>
                      <p className="text-[24px] mt-2 text-[#D70E0E] font-bold">
                        {plan.duration}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Price + Line */}
              <div className="relative mt-4 flex flex-col items-center gap-2">
                <p className="text-[32px] font-bold text-white z-10">
                  {plan.price}
                </p>
                <img
                  src={line}
                  alt="line"
                  className="w-[100px] h-[10px] object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-[16px] text-[#FAFAFA] leading-relaxed px-2 text-center">
                {plan.description}
              </p>

              {/* Subscribe Button */}
              <button
                onClick={() => setShowModal(true)}
                className="w-[193px] h-[45px] bg-[#D70E0E] hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold mx-auto mt-4"
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
