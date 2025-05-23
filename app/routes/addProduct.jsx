import { data, Form, Link, redirect } from "react-router";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import FormSpacer from "../components/formSpacer";
import { validationText, validationNumber } from "../.server/validation";
import { CreateProduct } from "../models/product";

export async function action({ request }) {
  let formData = await request.formData();
  let title = formData.get("title");
  let price = formData.get("price");
  let quantity = formData.get("quantity");
  let imageUrl = formData.get("imageUrl");
  console.log({ title, price, quantity, imageUrl });

  //validate the data

  let fieldError = {
    title: validationText(title),
    price: validationNumber(price),
    quantity: validationNumber(quantity),
    imageUrl: validationText(imageUrl),
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
  };
  let result = await CreateProduct(productObj);
  console.log(result);

  let id = result.insertedId.toString();

  return redirect(`/products/${id}`);
}

export default function AddProduct({ actionData }) {
  console.log({ actionData });
  return (
    <main className="max-w-xl mx-auto mt-10 p-8 bg-white  text-black rounded-lg shadow-md">
      <div className="flex justify-end mb-6"></div>
      <Link
        to="/product"
        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded shadow transition"
      >
        &larr; Back to product
      </Link>
      <h1 className="text-2xl font-bold mb-6 text-red-700">Add product</h1>

      <Form method="post" className="flex flex-col gap-4">
        <FormSpacer>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            className="w-full"
            placeholder="enter price"
            hasError={actionData?.fieldErrors.title}
          />
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            className="w-full "
            placerholder={4}
            hasError={actionData?.fieldErrors.price}
          />
          {actionData?.fieldErrors.price ? (
            <ErrorMessage text={actionData?.fieldErrors.price} />
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageurl"
            className="w-full"
            placerholder="imageUrl"
            hasError={actionData?.fieldErrors.imageUrl}
          />{" "}
          {actionData?.fieldErrors.title ? (
            <ErrorMessage text={actionData?.fieldErrors.imageUrl} />
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            type="number"
            name="quantity"
            id="quantity"
            className="w-full"
            hasError={actionData?.fieldErrors.quantity}
          />{" "}
          {actionData?.fieldErrors.title ? (
            <ErrorMessage text={actionData?.fieldErrors.quantity} />
          ) : null}
        </FormSpacer>

        <Button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors" />
      </Form>
    </main>
  );
}
