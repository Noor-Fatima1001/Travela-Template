
import React, { useState} from "react";
import {heroData} from "../Api/HeroData"



const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
   const [query, setQuery] = useState("");
  const [heroImage, setHeroImage] = useState(
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  );

     
  const handleSearch = async () => {
    if (!query) return;
    const accessKey = "GnQJ8HrooMxX6y4ctNlK-dPl8r6BqisB8uarjfclFTo"; 
    try {
      const heroRes = await fetch(
        `https://api.unsplash.com/photos/random?query=${query}+landscape&orientation=landscape&client_id=${accessKey}`
      );
      const heroData = await heroRes.json();
      if (heroData && heroData.urls) {
        setHeroImage(heroData.urls.regular);
      }
   
    } catch (err) {
      console.error("Error fetching data:", err);
    }

  
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroData.length - 1 : prev - 1
    );
  };
  const data = heroData[currentIndex];


  return (
    <>
      <section
        className="relative w-full h-[100vh] pt-10 flex items-center justify-center bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-8 md:px-12 max-w-4xl">
          <h4 className="uppercase tracking-[0.2em] text-small md:text-regular mb-space-sm font-semibold">
            {data.subtitle}
          </h4>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold sm:mb-space-md mb-space-sm leading-tight">
             Explore {query ? query : "the World"} together!
          </h1>
          <p className="text-small text-white mb-space-lg font-regular leading-relaxed px-2 sm:px-0">
            {data.description}
          </p>
          <button className="btn-lg px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base mb-space-md">
            {data.buttonText}
          </button>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary bg-opacity-80 rounded-r-pill py-2 pl-3 pr-2 md:py-3 text-white md:pl-10 md:pr-6 text-regular transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary bg-opacity-80 rounded-l-pill py-2 pl-2 pr-3 md:py-3 md:pl-6 md:pr-10 text-white text-regular transition"
        >
             ❯ 
        </button>
        <div className="absolute bottom-4 sm:bottom-20 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {heroData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </section>
      <div className="relative w-full flex justify-center mb-12">
  <div className="absolute -top-10 sm:-top-12 md:-top-14 w-full  sm:w-2/3  bg-opacity-70 bg-primary p-3 sm:p-8 rounded-pill shadow-xl z-20">
    <div className="relative w-full">
      <input
        type="text"
              placeholder="Search any country (e.g. Japan, Italy...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-5 py-3 sm:py-4  rounded-pill outline-none text-gray-700 text-sm sm:text-small"
      />
      <button
       onClick={handleSearch}
       className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary text-white font-semibold px-4 sm:px-6 py-2 sm:py-2 rounded-pill border border-primary hover:bg-white hover:text-primary transition">
        Search
      </button>
    </div>
  </div>
</div>


    </>
  );
};

export default HeroSection;



