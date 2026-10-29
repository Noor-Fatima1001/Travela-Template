import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const togglePages = () => setIsPagesOpen(!isPagesOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Packages",
    "Blog",
    "Pages ▾",
    "Contact",
  ];

  const pagesDropdown = [
    "Destinations",
    "Explore Tour",
    "Travel Booking",
    "Our Gallery",
    "Travel Guides",
    "Testimonial",
    "404 Page",
  ];

  return (
    <nav
      className={`fixed left-0 w-full transition-all duration-500 z-50 border-b ${
        isSticky
          ? "bg-white shadow-md top-0 left-0 border-tertiary border-opacity-5 text-gray-900"
          : "bg-transparent  text-white"
      }`}
    >
      <div className="w-full mx-auto px-3 sm:px-14 py-3 flex justify-between items-center">
        
        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300">
          <FaMapMarkerAlt
            className={`size-12 ${isSticky ? "text-primary" : "text-white"}`}
           
          />
          <h1
            className={`text-4xl font-bold tracking-wide ${
              isSticky ? "text-primary" : "text-white"
            }`}
          >
            Journify
          </h1>
        </div>

        <div
          className={`hidden lg:flex items-center gap-8 text-xl font-regular relative ${
            isSticky ? "text-gray-900" : "text-white"
          }`}
        >
          {menuItems.map((item) =>
            item === "Pages ▾" ? (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
              >
                <a
                  href="#"
                  className="relative transition-all duration-500 transform hover:scale-105 hover:text-primary"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-primary to-black rounded-pill transition-all duration-500 group-hover:w-full"></span>
                </a>

                {isPagesOpen && (
                  <div className="absolute left-0 mt-3 w-44 bg-white text-gray-900 rounded-lg shadow-lg py-3 border border-tertiary transition-all duration-300">
                    {pagesDropdown.map((page) => (
                      <a
                        key={page}
                        href="#"
                        className="block px-5 py-2 text-small hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        {page}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item}
                href="#"
                className="relative group transition-all duration-500 transform text:scale-105 hover:text-primary"
              >
                {item}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-primary to-black rounded-pill transition-all duration-500 group-hover:w-full"></span>
              </a>
            )
          )}

          <button className="btn-md">Book Now</button>
        </div>

      
        <button
          className="lg:hidden text-small focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FiX className={`${isSticky ? "text-primary" : "text-white"}`} size={24} />
          ) : (
            <FiMenu
              className={`${isSticky ? "text-primary" : "text-white"}`}
              size={36}
            />
          )}
        </button>
      </div>

      <div
        className={`lg:hidden bg-white text-gray-900 flex flex-col items-center gap-3 py-3 font-medium text-small transition-all duration-500 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 max-h-[600px]"
            : "opacity-0 scale-y-0 max-h-0 overflow-hidden"
        }`}
      >
        {menuItems.map((item) =>
          item === "Pages ▾" ? (
            <div key={item} className="w-full text-center">
              <button
                onClick={togglePages}
                className="relative w-full transition-all duration-300 hover:text-primary"
              >
                {item}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isPagesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {pagesDropdown.map((page) => (
                  <a
                    key={page}
                    href="#"
                    className="block py-2 text-small text-black hover:bg-primary hover:text-white transition-all"
                  >
                    {page}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={item}
              href="#"
              className="relative group transition-all duration-400 transform hover:scale-105 hover:text-primary"
            >
              {item}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-gradient-to-r from-primary to-tertiary rounded-pill transition-all duration-400 group-hover:w-full"></span>
            </a>
          )
        )}

        <button className="btn-md">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
