import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mx-24 gap-8 px-6 md:px-20 py-16 bg-white relative overflow-hidden">

      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute top-0 left-0 w-44 h-28 bg-primary clip-triangle-tl"></div>
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-primary clip-triangle-br"></div>
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"
            alt="About Travela"
            className="rounded-card object-cover w-[500px] h-[550px] z-10 relative"
          />
        </div>
      </div>

  
      <div className="w-full md:w-1/2  text-gray-700 relative z-10">
        <p className="heading-md mt-10">
          About Us  ______
        </p>
        <h2 className="heading-lg">
          Welcome to <span className="text-primary">Journify</span>
        </h2>

        <p className="mb-space-md leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          dolorum, doloribus sunt dicta, officia voluptatibus libero
          necessitatibus natus impedit quam ullam assumenda? Id atque iste
          consectetur.
        </p>
        <p className="mb-space-md leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quos voluptatum suscipit neque enim, doloribus ipsum rem eos
          distinctio, dignissimos nisi saepe nulla?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <p className="flex items-center gap-2">
            <FaCheck className="text-primary" /> First Class Flights
          </p>
          <p className="flex items-center gap-2">
            <FaCheck className="text-primary" /> Handpicked Hotels
          </p>
          <p className="flex items-center gap-2">
            <FaCheck className="text-primary" /> 5 Star Accommodations
          </p>
          <p className="flex items-center gap-2">
            <FaCheck className="text-primary" /> Latest Model Vehicles
          </p>
          <p className="flex items-center gap-2">
            <FaCheck className="text-primary" /> 150 Premium City Tours
          </p>
          <p className="flex items-center gap-2">
            <FaCheck className="text-primary" /> 24/7 Service
          </p>
        </div>

        <button className="bg-primary border border-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition flex items-center gap-2">
          Read More <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
