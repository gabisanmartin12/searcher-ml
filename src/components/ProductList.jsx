import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import FreeShippingIconUrl from "../assets/img/icons/free_shipping.png";
import { NO_SE_ENCONTRARON_PRODUCTOS } from "../constants/strings";
import Container from "./Container";

const ProductList = ({ products }) => {
  const history = useHistory();
  const goToDetail = (id) => history.push(`/items/${id}`);

  let areThereProducts = products && products.length;
  return (
    <Container>
      {!areThereProducts ? (
        <div className="empty-product-list" style={{ marginTop: "1rem" }}>
          {NO_SE_ENCONTRARON_PRODUCTOS}
        </div>
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

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const ProductListItem = ({
  title,
  picture,
  price,
  free_shipping,
  onClick,
}) => (
  <div className="product-list-item" onClick={onClick}>
    <img className="product-image rounded" src={picture} alt="Product" />
    <div className="product-info">
      <div className="product-info-secondary">
        <div className="price-info">
          <span className="price-symbol">{price && price.currency}</span>
          <span className="price-amount">{price && price.amount}</span>
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

ProductListItem.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired,
  }),
  free_shipping: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductList;
