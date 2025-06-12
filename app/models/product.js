import { client, ObjectId } from "../.server/mongo";
let db = client.db("products");
let collection = db.collection("products");
export async function getProducts() {
  let product = await collection.find().toArray();
  return product;
}
export async function CreateProduct(product) {
  let result = await collection.insertOne(product);
  return result;
}
export async function getProductsById(id) {
  let product = await collection.findOne({
    _id: ObjectId.createFromHexString(id),
  });
  return product;
}
export async function updateProduct(
  id,
  title,
  price,
  quantity,
  imageUrl,
  description
) {
  let result = await collection.updateOne(
    {
      _id: ObjectId.createFromHexString(id),
    },
    {
      $set: {
        title,
        price: Number(price),
        quantity: Number(quantity),
        imageUrl,
        description,
      },
    }
  );
  return result;
}
export async function deleteProduct(id) {
  let result = await collection.deleteOne({
    _id: ObjectId.createFromHexString(id),
  });
  return result;
}
