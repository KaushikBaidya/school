import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
// import Map from "../components/Map";
import Blogs from "../components/Blogs";
import Gallery from "../components/Gallery";
import Speciality from "../components/Speciality";
import Teachers from "../components/Teachers";
import Testimonial from "../components/Testimonial";

function Landing() {
  return (
    <div className="max-w-screen-2xl xl:max-w-screen-3xl mx-auto">
      <Hero />
      <Services />
      <About />
      <Speciality />
      <Teachers />
      <Testimonial />
      <Blogs />
      <Gallery />
      <Contact />
      {/* <Map /> */}
    </div>
  );
}

export default Landing;
