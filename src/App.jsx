import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./assets/components/nav";
import Footer from "./assets/components/Footer";

// Pages
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Trainings from "./assets/pages/Trainings";
import Activities from "./assets/pages/Activities";
import Benefits from "./assets/pages/Benefits";

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/benefits" element={<Benefits />} />
          
        </Routes>
        <Footer /> {}
      </div>
       
    </Router>
  );
}
