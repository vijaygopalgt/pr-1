import React from 'react';
import LEFT from '../image/L.png';
import Right from '../image/R.png';
import { Star } from "lucide-react";
import c1 from '../image/c1.jpg';
import c2 from '../image/c2.jpg';
import c3 from '../image/c3.jpg';
import T1 from '../image/T1.jpg';
import T2 from '../image/T2.jpg';
import Carousel from "../components/carouser";
import Pagenation from "../components/pagenation";
import Membership from "../components/Membership";
import ChooseUs from "../components/WhyChooseUs"; 
import AR from "../image/Ar.png";// Capitalize correctly

export default function Home() {
  return (
    <div className="bg-black text-white px-4 md:px-8 lg:px-10 py-6 flex flex-col gap-6">
      
      

      {/* Hero Section */}
     
 <section className="right-0 w-full max-w-[1340px] h-[620px] bg-black mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-16 ">
  {/* Left: Text */}
  <div className="w-full lg: p-[10px] max-w-[604px]">
    <h1 className="text-[48px] md:text-5xl font-medium leading-tight uppercase text-left">
      <span className="text-[#D70E0E]">Push Yourself,<br></br></span>Because No One else  <br></br>Is Going to Do It for You!!
    </h1>
    <div className="flex gap-4 mt-4">
  <button className="bg-red-600 hover:bg-red-700 mt-8 text-white font-semibold  mt-4 rounded-[60px] py-[12px] px-[51px] w-[191px] h-[45px]">
    Get Started
  </button>  
      </div>
      <div className="w-[340px] h-[63px] mt-12 flex items-center gap-[17px] bg-black text-white p-2 rounded-lg">
      {}
      <div className="flex -space-x-2">
        <img
          src= {c1}
          alt="User 1"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
        <img
          src={c2}
          alt="User 2"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
        <img
          src={c3}
          alt="User 3"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      </div>

      {/* Text + Lucide Stars */}
     
        
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} color="#FFD700" fill="#FFD700" />
          ))} <div className="flex flex-col"> <span className="font-normal text-sm">1000+ Satisfied Customers</span>
        </div>
      </div>
    </div>
``
  </div>
<div className="relative w-[769px] h-[620px] mx-auto">
 {/* Base Image */}
  <img
    src={LEFT}
    alt="Gym Motivation"
    className="absolute  bottom-0 left-0   w-[427px] h-[568px] object-cover rounded-lg shadow-xl"
  />

 <img
  src={Right}
  alt="Overlay"
  className="absolute bottom-0 right-0 translate-x-90 w-[528px] h-[531px] border-black scale-x-[-1] filter grayscale object-cover"
/>


</div>
</section>


      {/* Stats Section */}
      <section className="w-full border-t border-neutral-700 py-12 bg-black text-white">
        <div className="max-w-[1420px] mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
          <div>
            <h3 className="text-3xl font-extrabold text-red-500">5+</h3>
            <p className="text-sm text-gray-300 mt-3">Years Of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-red-500">10+</h3>
            <p className="text-sm text-gray-300 mt-3">Certified Trainers</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-red-500">1000+</h3>
            <p className="text-sm text-gray-300 mt-3">Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <ChooseUs />

      {/* Carousel Section */}
      <Carousel />

      {/* Membership Plans */}
      <Membership />

      {/* Pagination */}
      <Pagenation />

      {/* Transformation Section */}
      <section className="w-full py-16 bg-black text-white border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-[36px] font-bold mb-10 flex items-center gap-2">
             <img
                      src={AR}
                          alt="Gym Training"
                          className=" w-[74px] h-[74px] "></img>
            Our Members <span className="text-[#D70E0E]">Transformation</span>
          </h2>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-5 items-start">
            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-[36px]  italic leading-loose text-white">
                <span className="text-[#D70E0E]">"Member Success Stories!</span><br />
                 See the incredible fitness <br></br>journeys of our community <br></br>members“
              </p>
            </div>

            {/* Images */}
            <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-[85px]">
              <img src={T1} alt="Transformation 1" className="rounded-[20px] w-[335px] h-[337px] " />
              <img src={T2} alt="Transformation 2" className="rounded-[20px] w-[335px] h-[337px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
