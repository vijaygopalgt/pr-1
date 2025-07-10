import React, { useState } from "react";

const testimonials = [
  {
    name: "Arjun",
    image: "https://via.placeholder.com/80x80.png?text=Arjun",
    review: "Great equipment, friendly trainers!",
  },
  {
    name: "Priya",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "I love the energy and support here. Best gym ever!",
  },
  {
    name: "Rahul",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    review: "This gym transformed my life! Amazing trainers and great environment!",
  },
  {
    name: "Dharun",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review: "The trainers here are amazing, and the equipment is top-notch. I have seen significant improvements in my fitness!",
  },
  {
    name: "Pooja",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    review: "I love the yoga and HIIT sessions. The environment is clean, and the trainers are very supportive!",
  },
  {
    name: "Rishi",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review: "FITA Gym helped me transform my lifestyle. The group training sessions are fantastic!",
  },
  {
    name: "Alex David",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    review: "This gym transformed my life! Amazing trainers and great environment!",
  },
];

export default function TestimonialsSection() {
  const itemsPerPage = 2;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const paginatedTestimonials = testimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className="w-full py-16 bg-black text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-2">
          <span className="text-red-600 text-8xl">»</span> Testimonials
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Text */}
          <div>
            <h1 className="italic text-white text-2xl mb-4 w-full max-w-md">
              “What our Member Says!{" "}
              <span className="text-red-500">Real experiences</span> from our
              <span className="text-red-500"> valued members</span>”
            </h1>
            <p className="text-2xl text-white mt-10 mb-4">
              Give Your own Review!
            </p>
            <button className="bg-red-600 hover:bg-red-700 w-[199px] text-white px-5 py-2 mt-10 rounded-full text-lg">
              Write Review
            </button>
          </div>

          {/* Testimonials Grid */} <div className= "w-[836px] h-[632px]">
          <div className="grid grid-cols-1  w-[333px] h-[459px] sm:grid-cols-2 gap-6">
            {paginatedTestimonials.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-4 rounded-xl text-center h-full"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="text-white font-semibold">{item.name}</h4>
                <p className="text-yellow-500 text-sm">★★★★★</p>
                <p className="text-gray-400 text-sm mt-2">{item.review}</p>
              </div>
            ))}
              </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
          >
            ❮
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-8 h-8 rounded-full ${
                i === page
                  ? "bg-red-600 text-white"
                  : "border border-white text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
