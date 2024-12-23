import React from "react";
import BackgroundImage from "../assets/camera.png";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C667A] via-transparent to-black"></div>

      <div className="relative text-start z-10 max-w-7xl mx-auto h-full flex flex-col justify-center text-white px-4">
        <div className="w-full md:w-[55%] space-y-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed md:leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="text-base md:text-lg leading-relaxed md:leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pulvinar id quam vel volutpat. Aliquam eu augue eu purus tempor
            tempus vitae ut lectus. Phasellus rhoncus quam nisl, ornare
            elementum nisl rhoncus eget. Donec condimentum non elit auctor
            condimentum. Fusce ornare elit nec auctor accumsan. Quisque interdum
            tellus eget dui interdum fermentum in at metus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
