import { index, route } from "@react-router/dev/routes";
import { Route } from "react-router";

export default [
  index("routes/home.jsx"),
  route("product", "routes/products.jsx"),
  route("addProduct", "routes/addProduct.jsx"),
  route("product/:id", "routes/product.jsx"),
  route("product/:id/edit", "routes/editProduct.jsx"),
  route("product/:id/delete", "routes/deleteProduct.jsx"),
  route("learnMore", "routes/learnMore.jsx"),
];
