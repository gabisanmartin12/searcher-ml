import IndexView from "../views/IndexView";
import ProductDetailView from "../views/ProductDetailView";
import ProductsView from "../views/ProductsView";

const routes = [
  { path: "/items/:id", component: ProductDetailView, exact: true },
  { path: "/items", component: ProductsView, exact: false },
  { path: "/", component: IndexView, exact: false },
];

export default routes;
