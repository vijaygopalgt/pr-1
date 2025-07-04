import React from 'react';
import LEFT from '../image/L.png';
import Right from '../image/R.png';
import { Star } from "lucide-react";
import c1 from '../image/c1.jpg';
import c2 from '../image/c2.jpg';
import c3 from '../image/c3.jpg';
import img from '../image/img3.jpg';
import p1 from '../image/p1.jpg'

export default function Home() {
  return (
    <div className="
        bg-[#0A0A0A]
        text-white
        w-[1471px]
        h-[6526px]
        p-10
        relative
        -top-2
        -left-[15px]
        flex
        flex-col
        justify-start
        gap-6
      "
    > <div className="w-full border-t border-neutral-700 " />
<section className="right-0 w-full max-w-[1340px] h-[620px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-16 gap-10">
  {/* Left: Text */}
  <div className="w-full lg:w-1/2 p-[10px] max-w-[604px]">
    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-left">
      <span className="text-red-600">Push Yourself</span>, Because No One Else Is Going to Do It for You!
    </h1>
    <div className="flex gap-4 mt-4">
  <button className="bg-red-600 hover:bg-red-700 mt-8 text-white font-semibold rounded-[60px] py-[12px] px-[51px] w-[191px] h-[45px]">
    Get Started
  </button>  
      </div>
      <div className="w-[340px] h-[63px] mt-12 flex items-center gap-[17px] bg-black text-white p-2 rounded-lg">
      {/* 3 small images */}
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
      <div className="w-full border-t border-neutral-700 " />

      {/* Text + Lucide Stars */}
     
        
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} color="#FFD700" fill="#FFD700" />
          ))} <div className="flex flex-col"> <p className="font-normal text-sm">1000+ Satisfied Customers</p>
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
    className="absolute  bottom-0 left-0  w-[427px] h-[568px] object-cover rounded-lg shadow-xl"
  />

  {/* Overlay Image - Flipped Horizontally */}
  <img
    src={Right}
    alt="Overlay"
    className="absolute bottom-0 right-0 translate-x-55 w-[528px] h-[531px]   border-black scale-x-[-1]"
  />
</div>
</section>
<section className="w-full border-t border-neutral-700 py-12 bg-black text-white">
  <div className="max-w-[1420px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-2">
    {/* Stat 1 */}
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-extrabold text-red-500">5+</h3>
      <p className="text-sm text-gray-300 mt-3">Years Of Experience</p>
    </div>

    {/* Stat 2 */}
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-extrabold text-red-500">10+</h3>
      <p className="text-sm text-gray-300 mt-3">Certified Trainers</p>
    </div>

    {/* Stat 3 */}
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-extrabold text-red-500">1000+</h3>
      <p className="text-sm text-gray-300 mt-3">Happy Customers</p>
    </div>
  </div>
</section>

 <section className="w-full max-w-[1249px] h-[750px]  bg-black text-white border-t border-neutral-800 opacity-100"
  style={{ transform: 'rotate(0deg)' }}
>  <div className="max-w-[1320px] mx-auto px-6 flex flex-col gap-12">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2 uppercase">
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5" fill="none"><path d="M9 18l6-6-6-6" /></svg>
      <span className="text-white">Why People <span className="text-red-600">Choose us?</span></span>
    </h2>

    {/* Content: Image + Cards */}
<div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
  {/* Left Image */}
  <img
    src={img}
    alt="Choose Us"
    className="w-[525px] h-[451px] object-cover rounded-[20px] shadow-xl opacity-100"
  />
      {/* Feature Cards */}
      <div className="grid grid-cols-1 w-[277px] h-[311px] md:grid-cols-2 gap-[12px]  text-sm">
        <div className="border border-neutral-700 p-4 rounded-[20px] bg-[#0e0e0e]">
          <h3 className="text-red-600 font-bold mb-1">💪 Expert Personal Trainers</h3>
          <p>Get guided by certified professionals who customize workouts to match your fitness goals.</p>
        </div>
        <div className="border border-neutral-700 p-4 rounded-lg bg-[#0e0e0e]">
          <h3 className="text-red-600 font-bold mb-1">🛠️ Advanced Equipments</h3>
          <p>Train with cutting-edge equipment designed for performance and results.</p>
        </div>
        <div className="border border-neutral-700 p-4 rounded-lg bg-[#0e0e0e]">
          <h3 className="text-red-600 font-bold mb-1">🍎 Hygiene & Nutrition</h3>
          <p>Enjoy a clean environment with expert diet recommendations.</p>
        </div>
        <div className="border border-neutral-700 p-4 rounded-lg bg-[#0e0e0e]">
          <h3 className="text-red-600 font-bold mb-1">📅 Flexible Plans</h3>
          <p>Choose from affordable and adjustable membership plans.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="w-full py-16 bg-black text-white border-t border-neutral-800">
  <div className="max-w-[1320px] mx-auto px-6 flex flex-col gap-12">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2 uppercase">
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5" fill="none"><path d="M9 18l6-6-6-6" /></svg>
      <span className="text-white">What <span className="text-red-600">We Offer?</span></span>
    </h2>

    {/* Offer Grid */}
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      {/* Highlighted Item */}
      <div className="relative">
        <img
          src={p1}
          alt="Strength Training"
          className="rounded-xl w-[300px] h-[250px] object-cover shadow-xl"
        />
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          01
        </span>
        <p className="text-center mt-2 text-sm font-semibold">Strength Training</p>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        <img
          src={p1}
          alt="Offer 2"
          className="w-[90px] h-[120px] object-cover rounded-md opacity-60 hover:opacity-100 transition"
        />
        <img
          src="/offer-3.jpg"
          alt="Offer 3"
          className="w-[90px] h-[120px] object-cover rounded-md opacity-60 hover:opacity-100 transition"
        />
        <img
          src="/offer-4.jpg"
          alt="Offer 4"
          className="w-[90px] h-[120px] object-cover rounded-md opacity-60 hover:opacity-100 transition"
        />
      </div>
    </div>
  </div>
</section>


      
</div>

  );
}
