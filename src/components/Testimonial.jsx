import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import eye from "../assets/icon.png";
import coma from "../assets/coma.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Testimonial Data
const testimonialData = [
  {
    id: 1,
    name: "ANU",
    content:
      "Infinity Eye is my go-to electronics store! They have a wide range of products, excellent customer service, and competitive prices. Highly recommend.",
  },
  {
    id: 2,
    name: "Ajay",
    content:
      "Bought a laptop here last week, and the staff was very helpful in guiding me through the options. Great experience overall.",
  },
  {
    id: 3,
    name: "Abin",
    content:
      "Great store with helpful staff. I’ve bought several electronics here and always had a good experience.",
  },
  {
    id: 4,
    name: "Gokul",
    content:
      "The best place to buy electronics in town! I’m always impressed by their product range and quality.",
  },
];

const Testimonials = ({ id }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: false, // Stop at the last testimonial
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false,
  };

  const goToNext = () => sliderRef.current.slickNext();
  const goToPrevious = () => sliderRef.current.slickPrev();

  return (
    <div className="py-16 max-w-7xl mx-auto px-6" id={id}>
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-secondary">Testimonials</h2>
        <div className="w-20 h-1 mx-auto bg-primary my-4 rounded-full"></div>
      </div>

      {/* Custom Navigation */}
      <div className="flex justify-end mb-4 pr-8">
        <button
          onClick={goToPrevious}
          aria-label="Previous"
          className="border border-primary p-2 rounded-md text-primary hover:bg-primary hover:text-white transition"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={goToNext}
          aria-label="Next"
          className="border border-primary p-2 rounded-md text-primary hover:bg-primary hover:text-white transition ml-2"
        >
          <FaArrowRightLong />
        </button>
      </div>

      {/* Slider */}
      <div className="mx-auto px-4">
        <Slider ref={sliderRef} {...settings}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full transition-transform transform hover:shadow-xl hover:-translate-y-1"
                style={{
                  boxShadow: "0 2px 5px rgba(0, 123, 255, 0.15)",
                  minHeight: "250px", // Ensures all cards have the same height
                }}
              >
                <div className="flex items-center mb-4">
                  <img src={eye} alt="eye" className="mr-3" />
                  <h3 className="text-lg font-medium text-secondary">
                    {testimonial.name}
                  </h3>
                  <img src={coma} alt="coma" className="ml-auto" />
                </div>
                <p className="text-content flex-grow">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
