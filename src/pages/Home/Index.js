import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Exp from "./Exp";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Leftside from "./Leftside";

export default function Home() {
  // Get current theme

  return (
    <div className="bg-primary text-white">
      <Header />
      <div className="px-40 sm:px-5 transition-all duration-300">
        <Intro />
        <About />
        <Exp />
        <Projects />
        <Contact />
        <Footer />
        <Leftside />
      </div>
    </div>
  );
}
