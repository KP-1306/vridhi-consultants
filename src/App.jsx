// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* New: individual service pages, using the `slug` from services.js */}
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Fallback – send anything unknown back to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
