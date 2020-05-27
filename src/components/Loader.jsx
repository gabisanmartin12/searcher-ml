import PropTypes from "prop-types";
import React from "react";

const Loader = ({ message }) => (
  <div className="main-container" style={{ marginTop: "1rem" }}>
    {message}
  </div>
);

Loader.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Loader;
