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
    <main className="max-w-xl mx-auto mt-10 p-8 bg-white  text-black rounded-lg shadow-md">
      <div className="flex justify-between">
        {" "}
        <div className="flex justify-end mb-6">
          <Link
            to="/addProduct"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded shadow transition"
          >
            Add Product
          </Link>
        </div>
        <div className="flex justify-start mb-10">
          {" "}
          <Link
            to="/product"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded shadow transition"
          >
            &larr; Back to product
          </Link>
        </div>
        {/* <Button text="back page" handleClick={() => navigate(-1)} /> */}
      </div>
      <div className=" flex flex-col items-center">
        {" "}
        <img src={loaderData.imageUrl} alt={`Image of ${loaderData.title}`} />
        <h1 className="text-3xl text-orange-800 font-extrabold ml-15">
          {loaderData.title}
        </h1>
        <div className="flex">
          <p className="font-extrabold text-orange-600">Price:</p>
          <p className="font-light text-gray-950">{loaderData.price}</p>
        </div>
        <div className="flex">
          {" "}
          <p className="font-extrabold">number of items:</p>
          <p className="font-light">{loaderData.quantity}</p>
        </div>
      </div>
    </main>
  );
}
