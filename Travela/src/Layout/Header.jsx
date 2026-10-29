import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSignInAlt,
  FaTwitter,
  FaUser,
  FaYoutube,
  FaRegUser,
  FaInbox,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

const Header = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const dashboardOptions = [
    { name: "My Profile", icon: <FaRegUser /> },
    { name: "Inbox", icon: <FaInbox /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Account Settings", icon: <FaCog /> },
    { name: "Logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <header className=" hidden sm:block bg-primary text-white w-full relative z-[9999]">
      <div className="w-full mx-auto px-4 sm:px-12 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
       
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
          {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-primary transition duration-300"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-4" />
              </a>
            )
          )}
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-5 text-sm sm:text-small relative">
         
          <div className="flex items-center gap-2 cursor-pointer hover:text-tertiary transition">
            <FaUser />
            <span>Register</span>
          </div>

         
          <div className="flex items-center gap-2 cursor-pointer hover:text-tertiary transition">
            <FaSignInAlt />
            <span>Log in</span>
          </div>

     
          <div
            className="relative flex items-center gap-2 cursor-pointer hover:text-tertiary transition"
            onMouseEnter={() => setIsDashboardOpen(true)}
            onMouseLeave={() => setIsDashboardOpen(false)}
          >
            <LuLayoutDashboard />
            <span>Dashboard ▾</span>

            {isDashboardOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white text-gray-900 rounded-lg shadow-lg py-2 border border-gray-100 z-[99999]">
                {dashboardOptions.map((option) => (
                  <a
                    key={option.name}
                    href="#"
                    className="flex items-center gap-3 font-regular px-5 py-2 text-small hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <span className="w-5 h-5">{option.icon}</span>
                    {option.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
