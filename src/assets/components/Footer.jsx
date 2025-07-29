import React from 'react';
import { Mail, Phone } from 'lucide-react';
import img from '../image/img2.jpg';
import AR from '../image/Ar.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16 md:px-20 lg:px-24 border-t border-neutral-800">
      <div className="max-w-[1329px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Contact Form and Info */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-6 flex items-center gap-2 uppercase">
             <img
                      src={AR}
                          alt="Gym Training"
                          className=" w-[74px] h-[74px] "></img><span > Contact us</span>
          </h2>

          {/* Form Box */}
          <div className="bg-black p-6 rounded-[10px]  mt-15 border border-white shadow-md w-[449px] h-[587px] max-w-full">
            <h3 className="text-2xl mt-10 text-center italic mb-4">
  <span className="text-white">Get</span>{" "}
  <span className="text-[#D70E0E]">in Touch</span>
</h3>

            <form className="flex flex-col mt-15 gap-10">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="bg-transparent border border-white px-4 py-3 rounded-[10px] placeholder:text-sm"
              />
              <input
                type="email"
                placeholder="Enter Your Mail"
                className="bg-transparent border border-white px-4 py-3 rounded-[10px] placeholder:text-sm"
              />
              <textarea
                placeholder="Enter Your Message"
                rows={4}
                className="bg-transparent border border-white px-4 py-3 rounded-[10px]  h-[136px] resize-none outline-none placeholder:text-sm"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-[#D70E0E] text-white px-6 py-2 rounded-full h-[45px] font-semibold w-[294px] transition duration-300 self-center"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
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
        <div className="flex-1 flex flex-col mt-39 gap-40">
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
