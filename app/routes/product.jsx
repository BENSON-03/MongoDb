import React from "react";
import { Link } from "react-router";
import Button from "../components/Button";

import { getProductsById } from "../models/product";

export async function loader({ params }) {
  console.log({ params });
  let id = params.id;
  let product = await getProductsById(id);

  console.log({ product });
  return product;
}

export default function product({ loaderData }) {
  return (
    <main className="max-w-3xl mx-auto  md:mt-10 p-4 md:p-8 bg-white rounded-xl shadow-lg mt-15">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <Link
          to="/product"
          className="flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded shadow transition w-fit"
        >
          <span>&larr;</span> All Products
        </Link>

        <div className="flex gap-3">
          <Link
            to="edit"
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit
          </Link>
          <Link
            to="delete"
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={loaderData.imageUrl}
            alt={loaderData.title}
            className="w-full max-w-xs h-auto object-contain rounded-xl shadow-md border p-4 bg-gray-50"
          />
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            {loaderData.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-600 font-medium">Price</div>
              <div className="text-2xl font-bold text-gray-800">
                ${loaderData.price.toFixed(2)}
              </div>
            </div>

            <div
              className={`p-4 rounded-lg ${
                loaderData.quantity > 0 ? "bg-green-500" : "bg-red-50"
              }`}
            >
              <div className="text-sm font-medium">
                {loaderData.quantity > 0 ? "In Stock" : "Out of Stock"}
              </div>
              <div className="text-xl font-bold">
                {loaderData.quantity} units
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {loaderData.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
import { isRouteErrorResponse, useRouteError } from "react-router";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <main className="max-w-xl mx-auto mt-10 p-8 bg-red-100 text-red-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">
          {error.status} {error.statusText}
        </h1>
        <p className="mb-4">{error.data || "An unexpected error occurred."}</p>
      </main>
    );
  } else if (error instanceof Error) {
    return (
      <main className="max-w-xl mx-auto mt-10 p-8 bg-red-100 text-red-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">Error</h1>
        <p className="mb-2">{error.message}</p>
        <p className="font-semibold">The stack trace is:</p>
        <pre className="bg-red-200 p-2 rounded text-xs overflow-x-auto">
          {error.stack}
        </pre>
      </main>
    );
  } else {
    return (
      <main className="max-w-xl mx-auto mt-10 p-8 bg-red-100 text-red-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Unknown Error</h1>
      </main>
    );
  }
}
