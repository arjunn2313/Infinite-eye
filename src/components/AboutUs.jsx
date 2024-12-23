import React from "react";
import AboutImg from "../assets/aboutus.png";

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary">About Us</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pulvinarid quam vel volutpat. Aliquam eu augue eu purus tempor
              tempus vitae ut lectus. Phase rhoncus quam nisl, ornare elementum
              nisl rhoncus eget. Donec condimentum non elit auctor condimentum.
              Fusce ornare elit nec auctor accumsan. Quisqu interdum tellus eget
              dui interdum fermentum in at metus Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi pulvinarid quam vel volutpat.
              Aliqu Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi pulvinarid quam vel volutpat. Aliquam eu augue eu purus
              tempor tempus vitae ut lectus. elit nec auctor accumsan. Quisqu
              interdum tellus eget dui interdum fermentum in at metus Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Morbi Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pulvinarid quam vel volutpat. Aliquam eu augue eu purus tempor
              tempus vitae ut lectus. Phase rhoncus quam nisl, ornare elementum
              nisl
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
