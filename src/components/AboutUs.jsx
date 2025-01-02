import React from "react";
import AboutImg from "../assets/aboutus.png";

const AboutUs = ({ id }) => {
  return (
    <div id={id} className="bg-white py-16 px-6 sm:px-12 lg:px-24  ">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="mt-8 md:mt-14 grid md:grid-cols-2">
          <div>
            <img src={AboutImg} alt="Security Camera" />
          </div>

          {/* Text Section */}
          <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-secondary">
              Infinity <span className="text-primary">Eye</span>
            </h3>
            <p className="mt-4 text-start text-content md:text-lg leading-relaxed md:leading-loose ">
              At Infinity Eye, technology is not just about innovation but also
              about enriching experiences and empowering possibilities. Our
              products are crafted with a deep understanding of your needs,
              blending cutting-edge technology with user-friendly features.
              Whether it’s enhancing productivity, staying connected, or
              simplifying your daily tasks, Infinity Eye ensures every
              interaction with our electronics is intuitive, efficient, and
              truly transformative. Together, let’s redefine what’s possible and
              shape a smarter tomorrow. With an unwavering commitment to
              excellence, we aim to provide solutions that make your life better
              every day. Join us as we continue to push the boundaries of
              innovation. Experience the future of technology today, with
              Infinity Eye.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
