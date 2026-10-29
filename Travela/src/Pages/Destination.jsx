import React, { useEffect, useState } from "react";
import { FiZoomIn, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const Destination = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomImage, setZoomImage] = useState("");

  const countries = ["All", "USA", "Canada", "Europe", "China", "Singapore"];

  const fetchImages = async (country) => {
    setSelectedCountry(country);
    setLoading(true);

    const accessKey = "GnQJ8HrooMxX6y4ctNlK-dPl8r6BqisB8uarjfclFTo";

    try {
      const query = country === "All" ? "world travel" : country;

      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}+travel&per_page=9&client_id=${accessKey}`
      );

      const data = await res.json();
      setPlaces(data.results || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    }

    setLoading(false);
  };
useEffect(() => {
  fetchImages("All");  
}, []);

  return (
    <section className="px-6 py-10 md:mx-44">
  
      <div className="text-center mb-10">
        <h3 className="heading-md mb-2">_____Destination_____</h3>
        <h1 className="heading-lg mb-2">Popular Destination</h1>
      </div>

      <div className="flex justify-center gap-4 md:gap-6 flex-wrap mb-10">
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => fetchImages(country)}
            className={`btn-lg px-3 rounded-lg md:rounded-pill hover:none md:px-10 text-xl transition ${
              selectedCountry === country
                ? "bg-white text-primary"
                : "hover:bg-primary hover:text-white"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {loading && (
        <p className="text-center text-gray-600">Loading images...</p>
      )}

      {!loading && places.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {places.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-card shadow-lg group"
            >
              <img
                src={img.urls.regular}
                alt={img.alt_description}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-primary bg-opacity-20 group-hover:bg-opacity-50 
                transition duration-300 flex flex-col items-start justify-end p-4">

                <div
                  onClick={() => {
                    setShowZoom(true);
                    setZoomImage(img.urls.full);
                  }}
                  className="absolute top-3 right-3 p-2 bg-white text-primary rounded-full shadow 
                  opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white transition duration-300 cursor-pointer"
                >
                  <FiZoomIn className="text-xl" />
                </div>
                 <button className="btn-md hover:border-primary border border-white 
                    opacity-0 group-hover:opacity-100 transition duration-300 mb-2">
                    20 Photos
                  </button>
                <h2 className="text-white text-xl font-semibold mb-1 
                     opacity-0 group-hover:opacity-100 transition duration-300">
                  {selectedCountry} Spots
                </h2>

                <h2 className="text-white text-lg flex items-center space-x-2 
                     opacity-0 group-hover:opacity-100 transition duration-300">
                  <span>View all Places</span>
                  <FaArrowRight />
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}

      {showZoom && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setShowZoom(false)}
            className="absolute top-6 right-6 p-2 bg-white rounded-full shadow text-black hover:bg-primary hover:text-white transition"
          >
            <FiX className="text-3xl" />
          </button>

          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-22xl max-h-[90vh] rounded-lg shadow-xl transition"
          />
        </div>
      )}
    </section>
  );
};

export default Destination;
