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
export default function Products({ loaderData }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-amber-700">
        Products
      </h1>
      <div className="flex justify-end mb-6">
        <Link
          to="/addProduct"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded shadow transition"
        >
          Add Product
        </Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {loaderData.map((item) => (
          <Link to={`/product/${item._id}`} key={item._id} prefetch="intent">
            <li className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-40 h-40 object-cover rounded-lg mb-4 border border-amber-200 transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {item.title}
              </h2>
              <p className="text-lg text-amber-700 font-bold">${item.price}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
