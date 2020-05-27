import PropTypes from "prop-types";
import React, { Fragment } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import {
  COMPRAR,
  DESCRIPCION_DEL_PRODUCTO,
  EL_PRODUCTO_YA_ES_TUYO,
  FELICITACIONES,
  VENDIDOS,
} from "../constants/strings";

const ProductDetail = ({
  title,
  picture,
  condition,
  sold_quantity,
  price,
  description,
}) => {
  const buyIt = () =>
    NotificationManager.success(EL_PRODUCTO_YA_ES_TUYO, FELICITACIONES);
  return (
    <Fragment>
      <div className="product-detail-container rounded">
        <div className="main">
          <img className="rounded" src={picture} alt="Product" />
          <div>
            <div className="condition">
              {condition} - {sold_quantity} {VENDIDOS.toLowerCase()}
            </div>
            <div className="title">{title}</div>
            <div className="price">
              {price.currency} {price.amount}
              <span className="super-text">
                {price.decimals > 9 ? price.decimals : `0${price.decimals}`}
              </span>
            </div>
            <button className="primary rounded" onClick={buyIt}>
              {COMPRAR}
            </button>
          </div>
        </div>
        <div className="description">
          <div className="title">{DESCRIPCION_DEL_PRODUCTO}</div>
          <pre>{description}</pre>
        </div>
      </div>
      <NotificationContainer />
    </Fragment>
  );
};

ProductDetail.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  sold_quantity: PropTypes.number.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired,
  }),
  description: PropTypes.string,
};

export default ProductDetail;
