import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaCalendarAlt, FaMapMarkerAlt, FaStar, FaUser } from "react-icons/fa";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const countries = [
    { country: "Travel Norway", offer: "$450.00", days: "4 days", person: "3 persons" },
    { country: "Thailand Trip", offer: "$286.00", days: "5 days", person: "4 persons" },
    { country: "Discover Maldives", offer: "$550.00", days: "2 days", person: "2 persons" },
    { country: "New California", offer: "$351.00", days: "7 days", person: "5 persons" }
  ];

  useEffect(() => {
    const accessKey = "REPLACE_YOUR_KEY";

    const fetchImages = async () => {
      const fetchedPackages = await Promise.all(
        countries.map(async (pkg) => {
          const res = await fetch(
            `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
              pkg.country
            )}&client_id=${accessKey}`
          );
          const data = await res.json();
          return { ...pkg, url: data.urls.small };
        })
      );
      setPackages(fetchedPackages);
    };

    fetchImages();
  }, []);

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % packages.length);
  };

  const displayedPackages =
    packages.length > 0
      ? [
          packages[startIndex],
          packages[(startIndex + 1) % packages.length],
          packages[(startIndex + 2) % packages.length]
        ]
      : [];

  return (
    <div className="my-12 md:mx-48">
      <div className="heading-md text-center uppercase mb-2 text-primary">
        ____ Packages ____
      </div>

      <div className="heading-lg text-center font-semibold mb-8">
        Awesome Packages
      </div>

      <div className="flex justify-between mb-8">
        <button
          className="border border-primary mx-4 px-8 py-2 rounded-full bg-white text-primary hover:bg-primary hover:text-white"
          onClick={prev}
        >
          <ChevronLeft />
        </button>
        <button
          className="border border-primary px-8 py-2 rounded-full bg-white text-primary hover:bg-primary hover:text-white"
          onClick={next}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex md:flex-row flex-col gap-6 justify-center">
        {displayedPackages.map(({ country, offer, days, person, url }) => (
          <div key={country} className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg bg-white">

            <div className="relative w-full h-72 overflow-hidden group  ">
              <img src={url} alt={country} className="w-full h-full object-cover transition duration-500 
      group-hover:scale-110 " />
              <div 
              className="
                absolute inset-0 
                bg-primary bg-opacity-0 
                transition duration-500 
                group-hover:bg-opacity-30
              "
            ></div>
              <div className="absolute flex justify-center text-center bg-primary text-white px-3 py-1 rounded-b-full text-xl font-semibold shadow-md">
                {offer}
              </div>

           
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {country}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt /> {days}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser /> {person}
                  </div>
                </div>
              </div>
            </div>

          
            <div>
              <div className="text-xl font-semibold px-4 mt-2">{country}</div>
              <div className="text-gray-500 mb-2 px-4">HOTEL DEALS</div>

              <div className="flex text-primary gap-1 text-lg mb-2 px-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt nemo quae illum aperiam fugiat voluptatem repellat.
              </p>

              <div className="bg-primary text-white flex justify-between items-center text-md font-medium px-4 py-3 rounded-lg">
                <button className="hover:text-yellow-200 transition">Read More</button>
                <button className="hover:text-yellow-200 transition">Book Now</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
