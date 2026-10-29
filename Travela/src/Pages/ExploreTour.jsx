import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaEye } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

const ExploreTour = () => {
const [tourImages, setTourImages] = useState({});
const [tourType, setTourType] = useState("national");



const nationalCategories=[
  { 
    country:"Weekend Tour",
    offer:"50%"
  },
   { 
    country:"Road Trip",
  
  },
   { 
    country:"Beach Tour",
    offer:"20%"
  },
   { 
    country:"Adventure Tour",
  },
   { 
    country:"Wildlife Tour",
    offer:"35%"
  },
   { 
    country:"Cultural Tour",
   }
]

const internationalCategories=[
  { 
    country:"Paris",
    cities:"140 cities",
    places:"290+ tour places",
    offer:"50%"
  },
   { 
    country:"Dubai",
    cities:"76 cities",
    places:"120+ tour places"
  },
   { 
    country:"Island",
    cities:"60 cities",
    places:"200+ tour places",
    offer:"20%"
  },
   { 
    country:"Bali",
    cities:"50 cities",
    places:"90+ tour places"
  },
   { 
    country:"Maldives",
    cities:"101 cities",
    places:"180+ tour places",
  },
   { 
    country:"Canada",
    cities:"66 cities",
    places:"80+ tour places",
     offer:"15%"
  }
]

  const categories =
  tourType === "national" ? nationalCategories : internationalCategories;

 const fetchTourImages = async () => {
    const accessKey = "GnQJ8HrooMxX6y4ctNlK-dPl8r6BqisB8uarjfclFTo";
    const newTourImages = {};

    for (const category of categories) {
      try {
        const query = typeof category === "string" ? category : category.country;
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${accessKey}`
        );
        const data = await res.json();
        newTourImages[query] = data.results[0] || null; 
      } catch (err) {
        console.error(`Error fetching ${category} images:`, err);
        newTourImages[category] = null;
      }
    }

    setTourImages(newTourImages);
  };

useEffect(() => {
  fetchTourImages();
}, [tourType]);

;
  return (
    <div className='md:mx-[170px]'>
      <h3 className='heading-md flex justify-center items-center'>____ Explore Tour____</h3>
      <h1 className='heading-lg flex justify-center items-center'>The World</h1>
      <p className='paragraph flex justify-center items-center px-8 md:px-36'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Laborum tempore nam, architecto doloremquevelit explicabo? </p>
      <p className='paragraph flex justify-center items-center sm:items-center px-8  md:px-36 mb-4'> Voluptate sunt eveniet fuga eligendi!
      Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.</p>
       <div className='flex justify-center items-center gap-3 md:gap-10 '>
        <button  onClick={() => setTourType("national")}  className={`btn-lg px-5 md:px-12 rounded-lg md:rounded-pill transition text-lg ${
              tourType === "national"
                ? "bg-white text-primary"
                : "hover:bg-primary hover:text-white"
            }`}
          >National Tour Category</button>
        <button  onClick={() => setTourType("international")}  className={`btn-lg px-3 md:px-8 rounded-lg md:rounded-pill transition text-lg ${
              tourType === "international"
                ? "bg-white text-primary"
                : "hover:bg-primary hover:text-white"
            }`}>International Tour Category</button>
       </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-8">
  {nationalCategories.map(({country,offer}) => {
    const img = tourImages[country];
    if (!img) return null;

    return (
      <div
        key={country}
        className="relative rounded-card overflow-hidden shadow-lg group"
      >
        <img
          src={img.urls.regular}
          alt={img.alt_description}
          className="w-full h-64 object-cover rounded-card transform group-hover:scale-110 transition duration-500"
        />
         <h2
         className={`absolute top-0 rounded-br-card flex justify-start items-start font-semibold text-xl text-left
           ${offer ? "bg-blue-600 border border-blue-600 text-white p-4" : "bg-transparent border-0 text-black p-0"}`}
       >
         {offer}
       </h2>
        <div className="absolute inset-0 bg-transparent group-hover:bg-primary group-hover:bg-opacity-50 transition"></div>

        <h2 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-xl uppercase font-semibold z-10">
          {country}
        </h2>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg flex items-center gap-2 z-10">
          View all places <FaArrowRight />
        </div>
      </div>
    );
  })}

    {internationalCategories.map(({ country, cities, places, offer }) => {
        
      const img = tourImages[country];
      if (!img) return null;

      return (
        <div
          key={country}
          className="flex-shrink-0 w-full  relative rounded-card overflow-hidden shadow-lg group"
        >
          <img
            src={img.urls.regular}
            alt={img.alt_description}
            className="w-full h-64 object-cover rounded-card transform group-hover:scale-110 transition duration-500"
          />

          {offer && (
            <h2 className="absolute top-0 rounded-br-card bg-yellow-400 border border-yellow-400 text-white p-4 font-semibold text-xl">
              {offer}
            </h2>
          )}

          <div className="absolute inset-0 bg-transparent group-hover:bg-primary group-hover:bg-opacity-30 transition"></div>

          <h2 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-2xl uppercase font-semibold z-10">
            {country}
          </h2>
          <div className="hidden md:flex absolute bottom-4  md:left-24 -translate-x-1/2 text-white text-lg  items-center gap-1 z-10 hover:text-primary">
          <FaEye /> {places}
        </div>
          <div className=" hidden md:flex absolute bottom-4 md:right-2 -translate-x-1/2 text-white text-lg  items-center gap-1 z-10 hover:text-primary">
            <FaLocationPin /> {cities}
          </div>
          
        </div>
        
      );
    })}
    </div>
  </div>




  )
}

export default ExploreTour
