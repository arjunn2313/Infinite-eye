import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundImage from "../assets/camera.png";

const Hero = ({ id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <div
      id={id}
      ref={ref}
      className="h-screen bg-cover bg-center relative "
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C667A] via-transparent to-black"></div>

      {/* Content with Animation */}
      <div className="relative text-start z-10 max-w-7xl mx-auto h-full flex flex-col justify-center text-white px-4">
        <motion.div
          className="w-full md:w-[55%] space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Heading */}
          <motion.h1
            className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed md:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-base md:text-md leading-relaxed md:leading-loose"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pulvinar id quam vel volutpat. Aliquam eu augue eu purus tempor
            tempus vitae ut lectus. Phasellus rhoncus quam nisl, ornare
            elementum nisl rhoncus eget. Donec condimentum non elit auctor
            condimentum. Fusce ornare elit nec auctor accumsan. Quisque interdum
            tellus eget dui interdum fermentum in at metus.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
