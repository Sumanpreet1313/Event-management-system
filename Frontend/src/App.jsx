import React from 'react';
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App