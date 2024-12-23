import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallary";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonial";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero id="home"  />

      <AboutUs id="about" />

      <Gallery id="gallery" />
      <FAQ id="faqs" />
      <Testimonials id="testimonials" />
      <ContactForm id="contact" className="h-screen" />
      <Footer id="footer" />
    </>
  );
}
