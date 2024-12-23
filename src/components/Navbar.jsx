import React, { useState } from "react";
import { Link } from "react-scroll";
import LOGO from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const sectionId = ["home", "about", "gallery", "faqs", "contact"];

  return (
    <nav className="px-8 py-1 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="home">
          <img src={LOGO} alt="logo" className="w-full h-16 py-1 cursor-pointer" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-md text-secondary font-medium ">
          {["Home", "About Us", "Gallery", "FAQs", "Contact"].map(
            (item, index) => (
              <li key={index} className="cursor-pointer">
                <Link
                  to={sectionId[index]}
                  smooth={true}
                  duration={50}
                  spy={true}
                  offset={-64}
                  activeClass="text-primary border-b-2 border-primary"
                  className="hover:text-primary transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md text-center lg:hidden`}
        >
          {["Home", "About Us", "Gallery", "FAQs", "Contact"].map(
            (item, index) => (
              <li key={index} className="py-2 border-b border-gray-200">
                <Link
                  to={sectionId[index]}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-64}
                  activeClass="text-orange-500  "
                  className="text-secondary hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
