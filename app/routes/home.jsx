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

export default function Home() {
  return (
    <>
      <h1>PRODUCTS</h1>
      <Link to="/product" className="bg-blue-500 text-white rounded-2xl  w-100">
        Product page
      </Link>
    </>
  );
}
