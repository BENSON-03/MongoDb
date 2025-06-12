import React, { useState } from "react";
import { NavLink } from "react-router";

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-semibold transition" // active style
    : "text-gray-700 hover:text-blue-600 transition"; // default style

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-30 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                className="h-10 w-auto object-contain rounded-md shadow"
                src="/raihan-ullah-WfdhN6NwORI-unsplash.jpg"
                alt="Car Website Logo"
              />
              <span className="ml-2 text-xl font-bold text-blue-700 tracking-tight hidden sm:inline">
                CarShop
              </span>
            </NavLink>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/addProduct" className={navLinkClass}>
              Add Product
            </NavLink>
            <NavLink to="/product" className={navLinkClass}>
              Products
            </NavLink>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white shadow-lg space-y-4">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/addProduct"
            className={navLinkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Add Product
          </NavLink>
          <NavLink
            to="/products"
            className={navLinkClass}
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/products"
            className="inline-block bg-blue-600 text-white w-full text-center py-2 rounded-full hover:bg-blue-700 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Explore
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
