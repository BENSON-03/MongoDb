import { data, Form, Link, redirect } from "react-router";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { validationText, validationNumber } from "../.server/validation";
import { CreateProduct } from "../models/product";

export async function action({ request }) {
  let formData = await request.formData();
  let title = formData.get("title");
  let price = formData.get("price");
  let quantity = formData.get("quantity");
  let imageUrl = formData.get("imageUrl");
  let description = formData.get("description");
  console.log({ title, price, quantity, imageUrl, description });

  //validate the data

  let fieldError = {
    title: validationText(title),
    price: validationNumber(price),
    quantity: validationNumber(quantity),
    imageUrl: validationText(imageUrl),
    description: validationText(description),
  };
  //return error
  if (Object.values(fieldError).some(Boolean)) {
    return data({ fieldError }, { status: 404, statusText: "Bad Request" });
  }

  let productObj = {
    title,
    price: Number(price),
    quantity: Number(quantity),
    imageUrl,
    description,
  };
  let result = await CreateProduct(productObj);
  console.log(result);

  let id = result.insertedId.toString();

  return redirect(`/product/${id}`);
}

// ... existing imports ...

export default function AddProduct({ actionData }) {
  return (
    <main className="max-w-xl mx-auto mt-4 md:mt-10 p-4 md:p-8 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/product"
          className="flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded shadow transition"
        >
          <span>&larr;</span> Back
        </Link>
        <h1 className="text-xl md:text-2xl font-bold text-red-700">
          Add New Product
        </h1>
      </div>

      <Form method="post" className="flex flex-col gap-4 text-black">
        {/* Title Field */}
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="title">Product Title*</Label>
          <Input
            type="text"
            name="title"
            id="title"
            className="w-full"
            placeholder="Enter product title"
            hasError={actionData?.fieldErrors?.title}
          />
          {actionData?.fieldErrors?.title && (
            <ErrorMessage text={actionData.fieldErrors.title} />
          )}
        </div>

        {/* Price Field */}
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="price">Price ($)*</Label>
          <Input
            type="number"
            name="price"
            id="price"
            className="w-full"
            placeholder="0.00"
            hasError={actionData?.fieldErrors?.price}
          />
          {actionData?.fieldErrors?.price && (
            <ErrorMessage text={actionData.fieldErrors.price} />
          )}
        </div>

        {/* Image URL Field */}
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="imageUrl">Image URL*</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            className="w-full"
            placeholder="https://example.com/image.jpg"
            hasError={actionData?.fieldErrors?.imageUrl}
          />
          {actionData?.fieldErrors?.imageUrl && (
            <ErrorMessage text={actionData.fieldErrors.imageUrl} />
          )}
        </div>

        {/* Quantity Field */}
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="quantity">Stock Quantity*</Label>
          <Input
            type="number"
            name="quantity"
            id="quantity"
            className="w-full"
            placeholder="0"
            hasError={actionData?.fieldErrors?.quantity}
          />
          {actionData?.fieldErrors?.quantity && (
            <ErrorMessage text={actionData.fieldErrors.quantity} />
          )}
        </div>

        {/* Description Field */}
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="description">Description*</Label>
          <textarea
            name="description"
            id="description"
            className={`w-full p-2 border rounded ${
              actionData?.fieldErrors?.description
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter product description"
            rows="4"
          />
          {actionData?.fieldErrors?.description && (
            <ErrorMessage text={actionData.fieldErrors.description} />
          )}
        </div>

        <Button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-[1.02]"
          text="Add Product"
        />
      </Form>
    </main>
  );
}
