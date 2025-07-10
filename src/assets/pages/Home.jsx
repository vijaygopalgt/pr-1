import React from 'react';
import LEFT from '../image/L.png';
import Right from '../image/R.png';
import { Star } from "lucide-react";
import c1 from '../image/c1.jpg';
import c2 from '../image/c2.jpg';
import c3 from '../image/c3.jpg';
import img from '../image/img3.jpg';
import v1 from "../image/v1.png"
import T1 from '../image/T1.jpg';
import T2 from '../image/T2.jpg';
import Carousel from "../components/carouser";
import Pagenation from "../components/pagenation";


export default function Home() {
  return (
    <div className="
        bg-black
        text-white
        w-[1471px]
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
<section className="right-0 w-full max-w-[1340px] h-[620px] bg-black mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-16 gap-10">
  {/* Left: Text */}
  <div className="w-full lg:w-1/2 p-[10px] max-w-[604px]">
    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-left">
      <span className="text-red-600">Push Yourself</span>, Because No One Else Is Going to Do It for You!
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
    className="absolute  bottom-0 left-0  translate-x-42 w-[427px] h-[568px] object-cover rounded-lg shadow-xl"
  />

  {/* Overlay Image - Flipped Horizontally */}
  <img
  src={Right}
  alt="Overlay"
  className="absolute bottom-0 right-0 translate-x-100 w-[528px] h-[531px] border-black scale-x-[-1] filter grayscale"
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

<section
  className="w-full border-t border-neutral-700 py-12 bg-black text-white"
  style={{ transform: 'rotate(0deg)' }}
>
  <div className="max-w-[1320px] mx-auto px-6 flex flex-col gap-12">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2 uppercase">
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5" fill="none">
        <path d="M9 18l6-6-6-6" />
      </svg>
      <span className="text-white">
        Why People <span className="text-red-600">Choose us?</span>
      </span>
    </h2>

    {/* Content: Image + Feature Cards */}
    <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
      {/* Left Image */}
      <img
        src={img} // Replace with actual image import
        alt="Choose Us"
        className="w-[525px] h-[451px] object-cover rounded-[20px] shadow-xl"
      />

      {/* Feature Cards */}
      <div className="w-[609px] h-[666px] grid grid-cols-1 sm:grid-cols-2 gap-15  max-w-xl text-sm">
        {/* Card 1 */}
        <div className="border border-neutral-700 p-6 rounded-[20px] bg-[#0e0e0e] h-[311px]">
          <h3 className="text-red-600 font-bold text-lg mb-2">Expert Personal Trainers</h3>
          <p>Get guided by certified professionals who customize workouts to match your fitness goals.</p>
        </div>

        {/* Card 2 */}
        <div className="border border-neutral-700 p-6 rounded-[20px] bg-[#0e0e0e] h-[311px]">
          <h3 className="text-red-600 font-bold text-lg mb-2">Advanced Equipments</h3>
          <p>Train with cutting-edge equipment designed for performance and results.</p>
        </div>

        {/* Card 3 */}
        <div className=" h-[311px] border border-neutral-700 p-6 rounded-[20px] bg-[#0e0e0e] ">
          <h3 className="text-red-600 font-bold text-lg mb-2">Hygiene & Nutrition</h3>
          <p>Enjoy a clean environment with expert diet recommendations.</p>
        </div>

        {/* Card 4 */}
        <div className="h-[311px] border border-neutral-700 p-6 rounded-[20px] bg-[#0e0e0e] ">
          <h3 className="text-red-600 font-bold text-lg mb-2">Flexible Plans</h3>
          <p>Choose from affordable and adjustable membership plans.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<Carousel/>


<section className="w-full py-16 bg-black text-white border-t border-neutral-800">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-extrabold flex items-center gap-2 uppercase">
      <span className="inline-flex gap-2 text-white">
        <span className="text-red-600">»</span> Choose Your{" "}
        <span className="text-red-500">Membership Plan</span>
      </span>
    </h2>

    {/* Top Centered Image */}
    

    <div className="grid grid-cols-1 w-[1235px] h-[515px] md:grid-cols-3 gap-6 mt-8 justify-center">
      {/* Plan 1 */}
      <div className="border border-red-600 p-6 mt-8 rounded-lg w-[333px] h-[480px] flex flex-col justify-between bg-black">
  {/* Top Icon */}
  <div className="flex justify-center mb-4">
    <img
      src={v1}
      alt="Membership Illustration"
      className="w-[36px] h-auto object-contain"
    />
  </div>

  {/* Plan Title */}
  <div className="w-[193px] h-[88px] flex items-center justify-center rounded-[40px] mx-auto text-center">
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold text-white">Quarterly Plan</h3>
      <p className="text-sm text-red-500 font-semibold">(3 Months)</p>
    </div>
  </div>

  {/* Price & Description */}
  <div className="flex flex-col items-center w-[285px] mx-auto h-[288px] justify-start gap-[30px] mt-4 text-center">
    {/* Price + Curved Underline */}
    <div className="relative">
      <p className="text-[28px] font-extrabold text-white z-10 relative">₹6500 Only</p>
      <svg
        className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2"
        width="120"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10 C 40 25, 80 0, 110 10"
          stroke="#FF0000"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>

    {/* Plan Description */}
    <p className="text-sm text-gray-300 leading-relaxed px-2">
      Take your fitness to the next level with our Quarterly Plan—designed for consistent progress and results over three months!
    </p>

    {/* Subscribe Button */}
    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
      Subscribe
    </button>
  </div>
</div>


     {/* Plan 2 */}
<div className="border border-red-600  p-6 rounded-lg w-[333px] h-[515px] flex flex-col justify-between bg-[#1a1a1a]">
  {/* Top Icon */}
  <div className="flex justify-center mb-4">
    <img
      src={v1}
      alt="Membership Illustration"
      className="w-[36px] h-auto object-contain"
    />
  </div>

  {/* Plan Title */}
  <div className="w-[193px] h-[88px] flex items-center justify-center rounded-[40px] mx-auto text-center">
    <div className="flex flex-col items-center">
<div
  className="w-[332px] h-[55px] bg-[#D70E0E] flex items-center justify-center rounded-md"
  style={{ opacity: 1 }}
>
  <h3 className="text-2xl font-extrabold text-white">Monthly Plan</h3>
</div>
      <p className="text-xl mt-4 text-red-500 font-bold">(1 Month)</p>
    </div>
  </div>

  {/* Price & Description */}
  <div className="flex flex-col items-center w-[285px] mx-auto h-[288px] justify-start gap-[30px] mt-4 text-center">
    <div className="relative">
      <p className="text-[28px] font-extrabold text-white z-10 relative">₹2500 Only</p>
      <svg
        className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2"
        width="120"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10 C 40 25, 80 0, 110 10"
          stroke="#FF0000"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>

    <p className="text-sm text-gray-300 leading-relaxed px-2">
      Stay motivated and flexible. Our Monthly plan helps you try our services without a long-term commitment.
    </p>

    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
      Subscribe
    </button>
  </div>
</div>


      {/* Plan 3 */}
<div className="border border-red-600 mt-8 p-6 rounded-lg w-[333px] h-[480px] flex flex-col justify-between bg-black">
  {/* Top Icon */}
  <div className="flex justify-center mb-4">
    <img
      src={v1}
      alt="Membership Illustration"
      className="w-[36px] h-auto object-contain"
    />
  </div>

  {/* Plan Title */}
  <div className="w-[193px] h-[88px] flex items-center justify-center rounded-[40px] mx-auto text-center">
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold text-white">Yearly Plan</h3>
      <p className="text-sm text-red-500 font-semibold">(1 Year)</p>
    </div>
  </div>

  {/* Price & Description */}
  <div className="flex flex-col items-center w-[285px] mx-auto h-[288px] justify-start gap-[30px] mt-4 text-center">
    <div className="relative">
      <p className="text-[28px] font-extrabold text-white z-10 relative">₹25000 Only</p>
      <svg
        className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2"
        width="120"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10 C 40 25, 80 0, 110 10"
          stroke="#FF0000"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
    </div>

    <p className="text-sm text-gray-300 leading-relaxed px-2">
      Transform your body in a year. This plan offers the best value and long-term benefits!
    </p>

    <button className="w-[193px] h-[45px] bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
      Subscribe
    </button>
  </div>
</div>
</div>
  </div>
</section>
<Pagenation/>

<section className="w-full py-16 bg-black text-white border-t border-neutral-800">
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-2">
      <span className="text-red-600 text-8xl">»</span>
      Our Members <span className="text-[#D70E0E]">Transformation</span>
    </h2>

    {/* Content Section */}
    <div className="flex flex-col md:flex-row gap-10 items-start">
      
      {/* Left Text */}
      <div className="md:w-1/2">
        <p className="text-2xl font-bold italic leading-loose pl-2 text-white">
          <span className="text-[#D70E0E]">"Member Success Stories!</span><br />
          See the incredible fitness <br />
          journeys of our community <br />
          members"
        </p>
      </div>

      {/* Right Images */}
      <div className="md:w-1/2 grid grid-cols-2 gap-20">
        <img
          src={T1}
          alt="Member 1"
          className="rounded-xl h-[337px] w-[335px] "
        />
        <img
          src={T2}
          alt="Member 2"
          className="rounded-xl h-[337px] w-[335px] "
        />
      </div>
    </div>
  </div>
</section>






      
</div>

  );
}
