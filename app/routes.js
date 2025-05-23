import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("product", "routes/products.jsx"),
  route("addProduct", "routes/addProduct.jsx"),
  route("product/:id", "routes/product.jsx"),
];
