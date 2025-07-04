import React from 'react';
import { Mail, Phone } from 'lucide-react';
import img from '../image/img2.jpg'; 

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16 md:px-20 lg:px-24 border-t border-neutral-800">
      <div className="max-w-[1329px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Contact Form and Info */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4 flex items-center gap-2 uppercase">
  {/* White Chevron */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>

  {/* Red Chevron */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>

  Contact us
</h2>

          <div className="bg-black p-6 rounded-[10px] border border-white shadow-md w-[449px] h-[587px]">

            <h3 className="text-lg font-semibold mb-4 text-[#D70E0E]">Get in Touch</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="bg-transparent border border-white px-4 py-2 rounded outline-none"
              />
              <input
                type="email"
                placeholder="Enter Your Mail"
                className="bg-transparent border border-white px-4 py-2 rounded outline-none"
              />
              <textarea
                placeholder="Enter Your Message"
                rows={4}
className="bg-transparent border border-white px-4 py-2 rounded-[10px] w-[380px] h-[136px] resize-none outline-none"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold w-fit"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="mt-6 text-sm">
            <p className="text-gray-300 mb-2">
              Reach out to us for <span className="text-red-500 font-medium">any queries</span>
            </p>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>shadowstrengthgym@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Phone size={18} />
              <span>+91 - 9867167403</span>
            </div>
          </div>
        </div>

        {/* Right: Image and Map */}
        <div className="flex-1 flex flex-col gap-6">
          <img
            src={img}
            alt="Gym"
            className="w-full rounded shadow-lg object-cover max-h-[300px]"
          />
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.211571705249!2d-117.36613808468115!3d32.71573858099125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530eb2c509bd%3A0xe3ad66c63bb1f168!2sShadow%20Strength%20Gym!5e0!3m2!1sen!2sin!4v1620000000000"
            className="w-full h-[200px] rounded border-none"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}
