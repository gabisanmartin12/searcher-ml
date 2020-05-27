import { mount, shallow } from "enzyme";
import React from "react";
import ProductList from "../../components/ProductList";
import { NO_SE_ENCONTRARON_PRODUCTOS } from "../../constants/strings";

describe("ProductList", () => {
  const products = [
    {
      id: "MLA830042488",
      title: "Monitor Samsung S24f350fh Led 23.5  Negro 110v/220v",
      price: {
        currency: "$",
        amount: 16493,
        decimals: 0,
      },
      picture:
        "http://mla-s1-p.mlstatic.com/911540-MLA32045267362_092019-I.jpg",
      condition: "new",
      free_shipping: true,
    },
    {
      id: "MLA849544701",
      title: "Monitor Philips V 193v5lhsb2 Lcd 18.5  Negro 110v/220v",
      price: {
        currency: "$",
        amount: 9250,
        decimals: 0,
      },
      picture:
        "http://mla-s2-p.mlstatic.com/612093-MLA32045267283_092019-I.jpg",
      condition: "new",
      free_shipping: true,
    },
  ];

  let wrapper;

  it("render no products", () => {
    wrapper = shallow(<ProductList products={[]} />);
    expect(wrapper.find("div.empty-product-list").text()).toEqual(
      NO_SE_ENCONTRARON_PRODUCTOS
    );
  });

  it("render one product", () => {
    wrapper = mount(<ProductList products={[products[0]]} />);
    expect(wrapper.find("div.product-list-item").length).toBe(1);
  });

  it("render N products", () => {
    wrapper = mount(<ProductList products={products} />);
    expect(wrapper.find("div.product-list-item").length).toBe(products.length);
  });
});
