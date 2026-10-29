import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaFax,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-secondary text-white py-10">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-28 lg:py-28 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="font-bold text-regular mb-space-md">Get In Touch</h3>
          <ul className="space-y-2 text-small">
            <li className="flex items-center gap-2">
              <FaHome /> 123 Street, New York, USA
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +012 345 67890
            </li>
            <li className="flex items-center gap-2">
              <FaFax /> +012 345 67890
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-primary rounded-full hover:bg-secondary transition duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

    
        <div>
          <h3 className="font-bold text-regular mb-space-md">Company</h3>
          <ul className="space-y-2 text-small">
            {["About", "Careers", "Blog", "Press", "Gift Cards", "Magazine"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-tertiary transition duration-200 flex items-center gap-1">
                  <span>➤</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-regular mb-space-md">Support</h3>
          <ul className="space-y-2 text-small">
            {["Contact", "Legal Notice", "Privacy Policy", "Terms and Conditions", "Sitemap", "Cookie policy"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-tertiary transition duration-200 flex items-center gap-1">
                  <span>➤</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <select className="bg-secondary text-white p-2 rounded border border-gray-300">
                <option>English</option>
                <option>Arabic</option>
                <option>German</option>
                <option>Greek</option>
                <option>New York</option>
              </select>
              <select className="bg-secondary text-white p-2 rounded border border-gray-300">
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
                <option>GBP</option>
              </select>
            </div>

         <div className="mt-4">
  <h3 className="font-semibold text-regular mb-space-sm">Payments</h3>
  <div className="flex gap-2 flex-wrap">
    <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="w-16 h-14" />
    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-16 h-14" />
    <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" className="w-16 h-14" />
    <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="w-16 h-14" />
    <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" className="w-16 h-14" />
  </div>
</div>

          </div>
        </div>
      </div>
      
   <div className="border-t border-gray-300 mt-5 pt-5  text-center text-gray-300 text-small">
  © <span className="text-white text-small font-semibold">Your Site Name</span>, All rights reserved.
  <span className="ml-10">Designed By</span> 
  <strong className="text-white font-semibold text-small" > HTML Codex </strong>
</div>

    </footer>
  );
};

export default Footer;
