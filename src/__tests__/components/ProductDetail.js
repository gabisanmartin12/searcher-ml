import { mount, shallow } from "enzyme";
import React from "react";
import ProductDetail from "../../components/ProductDetail";
import {
  EL_PRODUCTO_YA_ES_TUYO,
  FELICITACIONES,
} from "../../constants/strings";

describe("ProductDetail", () => {
  const product = {
    id: "MLA836296331",
    title: "Nueva Enciclopedia Visual Clarín Lote Completo",
    price: {
      currency: "$",
      amount: 2000,
      decimals: 0,
    },
    picture: "http://mla-s2-p.mlstatic.com/679283-MLA40568356963_012020-I.jpg",
    condition: "used",
    free_shipping: false,
    sold_quantity: 0,
    desription:
      "Nueva enciclopedia Visual Clarín\nCiencia - Historia - Naturaleza\nLote completo de 23 enciclopedias\nExcelente estado, hermosa enciclopedia con gran calidad de impresión e imagenes",
  };

  let wrapper;

  it("render product", () => {
    wrapper = shallow(<ProductDetail {...product} />);
    expect(wrapper.find("div.product-detail-container").length).toBe(1);
  });

  it("buy product", () => {
    wrapper = mount(<ProductDetail {...product} />);
    wrapper.find("button").simulate("click");
    let notification = wrapper.find(".notification");
    expect(notification.length).toBe(1);
    expect(notification.find(".message").text()).toEqual(
      EL_PRODUCTO_YA_ES_TUYO
    );
    expect(notification.find(".title").text()).toEqual(FELICITACIONES);
  });
});
