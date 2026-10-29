import React from "react";
import { ServicesData } from "../Api/ServicesData";
import ServicesCard from "../Components/ServicesCard";

const Services = () => {
  return (
    <section className="flex items-center justify-center md:mx-32 px-6 md:px-20 py-10 bg-white">
      <div className="w-full max-w-7xl text-center">
        <h3 className="heading-md mb-2">_____Services_____</h3>
        <h1 className="heading-lg mb-8">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-2 place-items-center mb-8">
          {ServicesData.map((service) => (
            <ServicesCard
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
        <button className="btn-lg">Service more</button>
      </div>
    </section>
  );
};

export default Services;
