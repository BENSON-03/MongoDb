import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full bg-gray-900 text-gray-300 shadow-inner">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-8">
        <div className="md:max-w-96">
          <img
            className="h-10 w-auto rounded shadow-lg bg-white p-1"
            src="/yuvraj-singh-tmAynVA_ihE-unsplash.jpg"
            alt="React Logo"
          />
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            Prices and availability are subject to change without notice. All
            vehicles are sold as-is unless otherwise specified. Contact us for
            the most up-to-date information.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-100 tracking-wide">
              Company
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link className="hover:text-blue-400 transition-colors" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-400 transition-colors"
                  to="/learnMore"
                >
                  Learn More
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-400 transition-colors"
                  to="/product"
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-100 tracking-wide">
              Get in touch
            </h2>
            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2">
                <span role="img" aria-label="phone">
                  📞
                </span>{" "}
                +254706554241
              </p>
              <p className="flex items-center gap-2">
                <span role="img" aria-label="email">
                  ✉️
                </span>{" "}
                bensonmonyenye5@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-6 text-center text-xs md:text-sm pb-6 text-gray-500">
        Copyright 2024 © Company name. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
