import { getProducts } from "../models/product";
import { Link } from "react-router";

export async function loader() {
  let result = await getProducts();

  let products = result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  console.log({ products });

  return products;
}
// ... existing imports ...

export default function Products({ loaderData }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-700">
          Cars Catalog
        </h1>
        <Link
          to="/addProduct"
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-full shadow transition whitespace-nowrap"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Product
        </Link>
      </div>

      {loaderData.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No Products Found
          </h2>
          <p className="text-gray-600 mb-6">
            Add your first product to get started
          </p>
          <Link
            to="/addProduct"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded transition"
          >
            Add Product
          </Link>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loaderData.map((item) => (
            <li key={item._id} className="group">
              <Link
                to={`/product/${item._id}`}
                className="block h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-amber-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-1 bg-gray-100 flex justify-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full max-w-[180px] h-48 object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 mb-1 truncate">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-amber-700">
                      ${item.price.toFixed(2)}
                    </span>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        item.quantity > 0
                          ? "bg-blue-300 text-green-800"
                          : "bg-red-300 text-red-800"
                      }`}
                    >
                      {item.quantity > 0
                        ? `${item.quantity} in stock`
                        : "Out of stock"}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
