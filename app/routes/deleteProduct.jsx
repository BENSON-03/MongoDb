// ❌ Don't import server-only modules here
// import { deleteProduct } from "../models/product"; ❌
// import { getProductsById } from "../models/product"; ❌

import React from "react";
import { Link, Form, useLoaderData, redirect } from "react-router";

export async function loader({ params }) {
  const { getProductsById } = await import("../models/product.js");
  const product = await getProductsById(params.id);
  return product;
}

export async function action({ params }) {
  const { deleteProduct } = await import("../models/product.js");
  await deleteProduct(params.id);
  return redirect("/product");
}

// ... existing imports ...

export default function DeleteProduct() {
  const loaderData = useLoaderData();

  return (
    <main className="max-w-xl mx-auto mt-8 p-4 md:p-8 bg-white rounded-lg shadow-md">
      <Link
        to="/product"
        className="flex items-center gap-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded shadow transition mb-6 w-fit"
      >
        &larr; Back
      </Link>

      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-red-600">
            Confirm Deletion
          </h1>
        </div>

        <p className="mb-6 text-gray-700">
          Are you sure you want to permanently delete
          <br />
          <strong className="text-lg text-red-700">{loaderData.title}</strong>?
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to={`/product/${loaderData._id}`}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded transition"
          >
            Cancel
          </Link>
          <Form method="post">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded shadow transition"
            >
              Delete Permanently
            </button>
          </Form>
        </div>
      </div>
    </main>
  );
}
