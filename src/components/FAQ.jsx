import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = ({id}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "How can I place an order on your website?",
    "Do you offer any discounts?",
    "How do I create an account on your website?",
    "Do you offer bulk or wholesale discounts?",
  ];

  return (
    <div id={id} className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">
            Frequently <span className="text-secondary">Asked Questions</span>
          </h2>
          <div className="w-16 h-1 bg-primary  mx-auto mt-2 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5" >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" p-2 rounded-lg shadow-md  overflow-hidden"
              style={{
                boxShadow: "0 2px 5px rgba(0, 123, 255, 0.15)",
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left   text-secondary font-normal focus:outline-none"
              >
                <span className="font-normal text-md ">{faq}</span>
                <span
                  className={`transition-transform transform p-1 rounded-md bg-primary ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  } text-white`}
                >
              <IoIosArrowDown size={20}/> 
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 bg-gray-100 text-content font-normal   ">
                  This is the answer to the question: "{faq}". Provide detailed
                  information here.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
