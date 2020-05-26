import React, { Fragment, useEffect, useState } from "react";
import Categories from "../components/Categories";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";
import { BUSCANDO_PRODUCTOS } from "../constants/strings";
import useSearchParams from "../hooks/useSearchParams";
import itemService from "../services/items";

const ProductsView = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const search = useSearchParams().get("search");

  // Reset products and categories
  useEffect(() => {
    setProducts(null);
    setCategories(null);
  }, [search]);

  // Get products
  useEffect(() => {
    const fetchProducts = async (query) => {
      const data = await itemService.getAll({ q: query });
      setProducts(data.items);
      setCategories(data.categories);
    };

    if (search) fetchProducts(search);
    else setProducts([]);
  }, [search]);

  if (!products) return <Loader message={`${BUSCANDO_PRODUCTOS} ...`} />;

  return (
    <Fragment>
      {categories && <Categories categories={categories} />}
      {products && <ProductList products={products} />}
    </Fragment>
  );
};

export default ProductsView;
