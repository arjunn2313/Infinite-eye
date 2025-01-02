import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of electronic products does Infinity Eye offer?",
      answer:
        "We offer a range of innovative electronic products designed to make life smarter and more convenient, including smart home devices, gadgets, and accessories.",
    },
    {
      question: "How can I purchase Infinity Eye products?",
      answer:
        "You can purchase our products through our official website or at authorized retail outlets. Stay tuned for updates on our availability in your area.",
    },
    {
      question: "Do you provide a warranty on your products?",
      answer:
        "Yes, all our products come with a standard warranty to ensure customer satisfaction and product reliability. Details vary by product, so please check the warranty card included with your purchase.",
    },
    {
      question:
        "What makes Infinity Eye different from other electronics brands?",
      answer:
        "At Infinity Eye, we focus on combining innovation, quality, and user-friendly designs to create products that truly enhance your daily life. We’re committed to shaping a smarter, more connected future.",
    },
  ];

  return (
    <div id={id} className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary">
            <span className="text-primary"> F</span> requently{" "}
            <span className="text-primary">A</span>sked{" "}
            <span className="text-primary">Q</span>uestions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-2 py-4 rounded-lg shadow-md overflow-hidden"
              style={{ boxShadow: "0 2px 5px rgba(0, 123, 255, 0.15)" }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-secondary font-normal focus:outline-none"
              >
                <span className="font-normal text-lg">{faq.question}</span>
                <span
                  className={`transition-transform transform p-1 rounded-md bg-primary ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  } text-white`}
                >
                  <IoIosArrowDown size={20} />
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 bg-gray-100 text-content font-normal">
                  {faq.answer}
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
