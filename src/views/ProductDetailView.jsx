import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Loader from "../components/Loader";
import ProductDetail from "../components/ProductDetail";
import {
  BUSCANDO_PRODUCTO,
  NO_SE_ENCONTRO_EL_PRODUCTO,
} from "../constants/strings";
import itemService from "../services/items";

const ProductDetailView = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => setProduct(null), [id]);

  // Get the product with the given id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await itemService.getById(id);
        setProduct(data);
      } catch (err) {
        setProduct({});
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <Loader message={`${BUSCANDO_PRODUCTO} ...`} />;

  return (
    <Container>
      {!Object.keys(product).length ? (
        // In this case, I will use the loader to show empty results messages
        <Loader message={NO_SE_ENCONTRO_EL_PRODUCTO} />
      ) : (
        <ProductDetail {...product} />
      )}
    </Container>
  );
};

export default ProductDetailView;
