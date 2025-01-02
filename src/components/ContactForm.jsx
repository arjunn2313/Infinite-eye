import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ContactForm = ({id}) => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const loadingToast = toast.loading("Sending your message...");
    
    emailjs
      .sendForm(
        // process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "service_mg54kyf",
        // process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        "template_5f9ugxm",
        form.current,
        // process.env.REACT_APP_EMAILJS_USER_ID
        "Lk0fYiZyYuEwUTMiO"
      )
      .then(
        () => {
          toast.dismiss(loadingToast);
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.dismiss(loadingToast);
          console.error("Error sending email:", error);
          toast.error("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div id={id} className="  flex flex-col max-w-7xl mx-auto  py-28 px-6 sm:px-12     md:flex-row md:items-start ">
      {/* Left Section */}
      <div className="w-full md:w-[40%] space-y-6  ">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Please Get In Touch
        </h2>
        <h3 className="text-2xl md:text-5xl font-semibold text-primary">
          Let's Talk
        </h3>

        <div className="space-y-8 py-5 ">
          {/* Address */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-primary text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-secondary">
                Office Address
              </h4>
              <p className="text-gray-700">
              200/6/15A , III Cross Street, Ponnappa Nadar Colony, Ramanputhur, Nagercoil - 629004
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-primary text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-secondary">Email Us</h4>
              <p className="text-gray-700">infinityeyengl@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-primary text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-secondary">Call Us</h4>
              <p className="text-gray-700">+91 99440 46496</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[60%]  ">
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-lg border border-secondary space-y-6 w-full"
        >
          <h4 className="text-2xl font-semibold text-secondary mb-4">
            Send Message
          </h4>

          {/* Full Name */}
          <div>
            <input
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-3 border-b border-secondary focus:ring-0 focus:outline-none"
              type="text"
              name="fullName"
              placeholder="Full Name*"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Mobile Number and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                {...register("mobileNumber", {
                  required: "Mobile Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
                className="w-full p-3 border-b border-secondary focus:ring-0 focus:outline-none"
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number*"
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full p-3 border-b border-secondary focus:ring-0 focus:outline-none"
                type="email"
                name="email"
                placeholder="Email*"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 border-b border-secondary focus:ring-0 focus:outline-none"
              name="message"
              rows="4"
              placeholder="Message*"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex  justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-teal-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
