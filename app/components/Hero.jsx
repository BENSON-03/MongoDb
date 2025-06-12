import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 mt-8 md:mt-24">
        <div className="max-w-lg max-md:mt-7">
          <h1 className="font-bold text-5xl md:text-6xl text-black drop-shadow-sm">
            A marketplace for <span className="text-blue-500">Car Lovers</span>
          </h1>
          <p className="mt-8 text-gray-500 text-base md:text-lg leading-relaxed">
            Unlock potential with tailored strategies designed for car
            enthusiasts. Simplify your car buying and selling experience,
            maximize results.
          </p>
          <div className="flex items-center mt-8 gap-4">
            <Link to="/product" className="relative group">
              <span className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none text-white text-base font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl">
                Browse Cars
              </span>
              <svg
                className="absolute -left-5 -bottom-10 opacity-80 group-hover:opacity-100 transition"
                width="61"
                height="26"
                viewBox="0 0 61 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#2563EB"
                  d="M.459.135Q.227.25 0 .371c.037.277.143.473.283.712l.12.207q.128.215.263.425c... [SVG path trimmed for brevity] ..."
                />
              </svg>
            </Link>
            <Link
              to="/learnMore"
              className="flex items-center gap-2 px-8 py-3 rounded-lg text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Learn more
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <img
          className="w-52 md:w-80 scale-x-[-1] max-md:mt-10 rounded-2xl shadow-xl border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/thinkingImage.svg"
          alt="thinking"
        />
      </main>

      <div className="mt-12 max-w-4xl mx-auto flex items-center justify-center text-gray-600 text-sm md:text-base pb-12 gap-2">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row text-center items-center md:gap-2 px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition-all duration-200 cursor-pointer group">
          <svg
            className="w-7 md:w-9 mb-2 md:mb-0 group-hover:scale-110 transition-transform duration-200"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              clipPath="url(#a)"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path
                d="M18 1.978c-1.902 0-3.794.244-5.576.75M1.929 34.022V16.693c0-4.234 1.354-7.48 3.517-9.834m28.625 27.163v-14.55M18 1.978c6.91 0 13.679 3.223 15.559 10.477M11.173 34.023s-.861-2.716-1.508-6.646m15.162 6.646s2.206-6.952 2.206-14.71c0-1.517-.196-2.805-.54-3.897M18 29.37v2.572M8.967 19.313c0-7.757 5.122-9.544 9.033-9.544 1.16 0 2.425.157 3.633.58"
                strokeLinejoin="round"
              />
              <path d="M14.979 21.895c0-2.412 1.352-3.725 3.021-3.725s3.021 1.313 3.021 3.725" />
            </g>
          </svg>
          <p className="font-medium group-hover:text-blue-600 transition-colors duration-200">
            Wide Car Selection
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row text-center items-center md:gap-2 px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition-all duration-200 cursor-pointer group">
          <svg
            className="w-7 md:w-9 mb-2 md:mb-0 group-hover:scale-110 transition-transform duration-200"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.854 27.273c.418 3.69 3.538 6.566 7.248 6.697 1.882.067 3.815.102 5.898.102s4.016-.035 5.898-.102c3.71-.131 6.83-3.008 7.248-6.697.146-1.286.247-2.592.247-3.916s-.101-2.63-.247-3.915c-.418-3.69-3.538-6.566-7.248-6.698a165 165 0 0 0-5.898-.1c-2.083 0-4.016.034-5.898.1-3.71.132-6.83 3.008-7.248 6.698a35 35 0 0 0-.247 3.915c0 1.324.101 2.63.247 3.916Z"
              stroke="#2563EB"
              strokeWidth="2"
            />
            <path
              d="M25.5 12.643V9.429a7.5 7.5 0 0 0-15 0v3.214m7.5 9.214v2.572"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-medium group-hover:text-blue-600 transition-colors duration-200">
            Secure
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row text-center items-center md:gap-2 px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition-all duration-200 cursor-pointer group">
          <svg
            className="w-7 md:w-9 mb-2 md:mb-0 group-hover:scale-110 transition-transform duration-200"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.106 17.836c0-9.77 4.098-13.956 5.465-15.352H29.43c1.366 1.396 5.464 5.583 5.464 15.352 0 11.165-10.764 15.284-16.229 16.68C13.2 33.12 2.106 29 2.106 17.835"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 20.568a5.515 5.515 0 1 0 0-11.03 5.515 5.515 0 0 0 0 11.03m9.21 10.074c-3.12 2.088-6.61 3.25-9.045 3.873-2.47-.63-6.09-1.818-9.317-3.96A11.03 11.03 0 0 1 18.5 25.68a11.03 11.03 0 0 1 9.21 4.961"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-medium group-hover:text-blue-600 transition-colors duration-200">
            Community Support
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
