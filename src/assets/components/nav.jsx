import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import img1 from "../image/img1.jpg"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Trainings", path: "/trainings" },
    { name: "Activities", path: "/activities" },
    { name: "Benefits", path: "/benefits" },
  ];

  return (
    <nav
  className="bg-black text-white w-full h-full px-[10px] py-[10px] flex items-center justify-between gap-[10px] shadow-md sticky top-0 z-50 mx-auto"
>

      {/* Logo + Text */}
      <Link to="/" className="flex items-center gap-2">
        <img src={img1} alt="Logo" className="w-15 h-15 object-cover " />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-red-500 transition relative group"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        ))}
      </div>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex gap-2">
        <button className="bg-neutral-800 px-4 py-2 rounded-full">Plans</button>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-semibold">
          Contact us
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white px-6 py-4 flex flex-col space-y-4 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-neutral-800 px-4 py-2 rounded-full">Plans</button>
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-semibold">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
}
