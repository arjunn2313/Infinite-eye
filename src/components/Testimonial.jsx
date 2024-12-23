import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import eye from "../assets/icon.png";
import coma from "../assets/coma.png";
import { FaArrowLeftLong, FaArrowRightLong  } from "react-icons/fa6";

// Testimonial Data
const testimonialData = [
  {
    id: 1,
    name: "S.V. Snacks",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar id quam vel volutpat. Aliquam eu augue eu purus tempor tempus vitae ut lectus.",
  },
  {
    id: 2,
    name: "Shree Textiles",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar id quam vel volutpat. Aliquam eu augue eu purus tempor tempus vitae ut lectus.",
  },
  {
    id: 3,
    name: "GreenTech Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar id quam vel volutpat. Aliquam eu augue eu purus tempor tempus vitae ut lectus.",
  },
  {
    id: 4,
    name: "Urban Builders",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar id quam vel volutpat. Aliquam eu augue eu purus tempor tempus vitae ut lectus.",
  },
  {
    id: 5,
    name: "Elite Academy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar id quam vel volutpat. Aliquam eu augue eu purus tempor tempus vitae ut lectus.",
  },
  {
    id: 6,
    name: "Royal Bakers",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar id quam vel volutpat. Aliquam eu augue eu purus tempor tempus vitae ut lectus.",
  },
];

const Testimonials = ({id}) => {
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
        <div className="w-16 h-1 mx-auto bg-primary my-4 rounded-full"></div>
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
          <div key={testimonialData[0].id} className="p-4">
            <div
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full transition-transform transform hover:shadow-xl hover:-translate-y-1"
              style={{
                boxShadow: "0 2px 5px rgba(0, 123, 255, 0.15)",
              }}
            >
              <div className="flex items-center mb-4">
                <img src={eye} alt="eye" className="mr-3" />
                <h3 className="text-lg font-medium text-secondary">
                  {testimonialData[0].name}
                </h3>
                <img src={coma} alt="coma" className="ml-auto" />
              </div>
              <p className="text-content flex-grow">
                {testimonialData[0].content}
              </p>
            </div>
          </div>

          {testimonialData.slice(1).map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full transition-transform transform hover:shadow-xl hover:-translate-y-1"
                style={{
                  boxShadow: "0 2px 5px rgba(0, 123, 255, 0.15)",
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
