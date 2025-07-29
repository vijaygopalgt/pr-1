import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import img1 from "../image/img1.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Trainings", path: "/trainings" },
    { name: "Activities", path: "/activities" },
    { name: "Benefits", path: "/benefits" },
  ];

  return (
    <div>
    <nav className="bg-black text-white w-full h-[130px] px-4 py-3 flex items-center justify-between shadow-md z-50 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={img1}
          alt="Logo"
          className="w-[100px] h-[80px] object-contain"
        />
      </Link>

      {/* Desktop Nav */}
<div className="hidden md:flex items-center gap-25 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="relative group transition duration-300"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-80 transform transition-transform origin-left duration-500"></span>
          </Link>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex gap-4 items-center">
        {(isHomePage || location.pathname.startsWith("/plans")) && (

          <Link 
          to="/plans"
          className="bg-neutral-800 text-white px-5 py-2 rounded-full hover:bg-neutral-700 transition">
            Plans
          </Link>
        )}
        <Link
          to="/contact"
          className="bg-red-600 hover:bg-red-700 font-semibold text-white px-6 py-3 rounded-full transition text-sm"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown from Top) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white py-8 px-4 flex flex-col items-center gap-6 shadow-lg md:hidden z-40 animate-slide-down">
          {/* Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-base font-medium hover:text-red-500 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Divider */}
          <div className="w-[80%] h-px bg-neutral-600 my-2" />

          {(isHomePage || location.pathname.startsWith("/plans")) && (

  <Link
    to="/plans"
    onClick={() => setIsOpen(false)}
    className="bg-neutral-800 text-white text-base px-6 py-2 rounded-full hover:bg-neutral-700 transition"
  >
    Plans
  </Link>
)}


          {/* Contact Button */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full text-base"
          >
            Contact us
          </Link>
         
        </div>
        
      )}
    </nav> <div className="w-full border-t border-neutral-700" /></div>
  );
}
