import PropTypes from "prop-types";
import React from "react";

const Categories = (props) => {
  let last = props.categories.shift(),
    categories = props.categories.length
      ? `${props.categories.join(" > ")} > `
      : null;

  return (
    <div className="main-container categories-container">
      <span>{categories}</span>
      <span className="last">{last}</span>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Categories;
