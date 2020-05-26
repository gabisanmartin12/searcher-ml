import IndexView from "../views/IndexView";
import ProductDetailView from "../views/ProductDetailView";
import ProductsView from "../views/ProductsView";

const routes = [
  { path: "/items/:id", component: ProductDetailView },
  { path: "/items", component: ProductsView },
  { path: "/", component: IndexView },
];

export default routes;
