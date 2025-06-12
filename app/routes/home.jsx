import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import { getProducts } from "../models/product";
import { Link } from "react-router";

export async function loader() {
  let product = await getProducts();

  console.log({ product });
  return product;
}

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// ... existing imports ...

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Product Management System
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Manage your inventory efficiently with our powerful product
            management tools
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="/product"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            Browse Products
          </Link>
        </div>
      </div>
      <HeroSection />
    </>
  );
}
