import React from "react";
import phone from "../assets/phone.png";
import tv from "../assets/tv.png";
import buds from "../assets/buds.png";
import tab from "../assets/tab.png";
import laptop from "../assets/laptop.png";
import cctv from "../assets/cctv.png";
import card from "../assets/card.png";
import speaker from "../assets/speaker.png";
import desk from "../assets/desk.png";
import mod from "../assets/mod.png";

const Gallery = ({id}) => {
  return (
    <div id={id} className="bg-white py-16 px-6 sm:px-12 lg:px-24 h-full">
      <div className="max-w-7xl mx-auto h-full">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary">Gallery</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Master Grid */}
        <div className="mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-4 gap-4   ">
          {/* Large Image */}
          <div className="col-span-1 sm:col-span-2 sm:row-span-2  ">
            <img
              src={phone}
              alt="Gallery Image 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              
            />
          </div>

          {/* Smaller Images */}
          <div className="grid grid-cols-2 col-span-1 sm:col-span-2 gap-4  ">
            <div >
              <img
                src={tv}
                alt="Gallery Image 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={buds}
                alt="Gallery Image 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={tab}
                alt="Gallery Image 4"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={laptop}
                alt="Gallery Image 5"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 h-full mt-3 ">
          {/* Smaller Images */}
          <div className="grid grid-cols-2 col-span-1 sm:col-span-2 gap-4 h-fit order-1 sm:order-none">
            <div className="h-full">
              <img
                src={card}
                alt="Gallery Image 2"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={speaker}
                alt="Gallery Image 3"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={desk}
                alt="Gallery Image 4"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={mod}
                alt="Gallery Image 5"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* Large Image */}
          <div className="col-span-1 sm:col-span-2 sm:row-span-2 order-none sm:order-1 h-full">
            <img
              src={cctv}
              alt="Gallery Image 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
