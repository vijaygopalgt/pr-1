import React from "react";
import { X } from "lucide-react";
import qrImage from "../image/q1.png"; // Ensure path is correct

export default function PaymentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-[#303030] text-white w-full max-w-[897px] h-auto md:h-[512px] rounded-[20px] relative p-6 sm:p-8 flex flex-col items-center justify-center text-center">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-red-500"
          onClick={onClose}
        >
          <X size={28} />
        </button>

        {/* QR Code */}
        <img
          src={qrImage}
          alt="QR Code"
          className="w-[120px] sm:w-[150px] md:w-[180px] mb-6"
        />

        {/* Payment Instructions */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Scan the QR Code & Make a Payment
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-2">
          Send a Payment Screenshot to this number
        </p>
        <p className="text-red-500 text-base sm:text-lg font-semibold">
          +91 - 9864187403
        </p>
      </div>
    </div>
  );
}
