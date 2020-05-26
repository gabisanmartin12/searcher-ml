import React from "react";
import { useHistory } from "react-router-dom";
import FreeShippingIconUrl from "../assets/img/icons/free_shipping.png";
import { NO_SE_ENCONTRARON_PRODUCTOS } from "../constants/strings";
import Container from "./Container";
import Loader from "./Loader";

const ProductList = ({ products }) => {
  const history = useHistory();
  const goToDetail = (id) => history.push(`/items/${id}`);

  let areThereProducts = products && products.length;
  return (
    <Container>
      {!areThereProducts ? (
        // In this case, I will use the loader to show empty results messages
        <Loader message={NO_SE_ENCONTRARON_PRODUCTOS} />
      ) : (
        <div className="product-list rounded">
          {products.map((product) => (
            <ProductListItem
              key={product.id}
              onClick={() => goToDetail(product.id)}
              {...product}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

const ProductListItem = ({ title, picture, price, free_shipping, onClick }) => (
  <div className="product-list-item" onClick={onClick}>
    <img className="product-image rounded" src={picture} alt="Product" />
    <div className="product-info">
      <div className="product-info-secondary">
        <div className="price-info">
          <span className="price-symbol">{price.currency}</span>
          <span className="price-amount">{price.amount}</span>
          {free_shipping && (
            <img src={FreeShippingIconUrl} alt="Free Shipping" />
          )}
        </div>
        <span className="product-city">Capital federal</span>
      </div>
      <span className="product-title">{title}</span>
    </div>
  </div>
);

export default ProductList;
