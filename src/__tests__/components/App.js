import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import IndexView from "../../views/IndexView";
import ProductDetailView from "../../views/ProductDetailView";
import ProductsView from "../../views/ProductsView";

describe("App routing", () => {
  let wrapper;

  it("render product list view with search query param", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/items?search=monitor"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(IndexView)).toHaveLength(0);
    expect(wrapper.find(ProductDetailView)).toHaveLength(0);
    expect(wrapper.find(ProductsView)).toHaveLength(1);
  });

  it("render product list view with empty search query param", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/items?search="]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(IndexView)).toHaveLength(0);
    expect(wrapper.find(ProductDetailView)).toHaveLength(0);
    expect(wrapper.find(ProductsView)).toHaveLength(1);
  });

  it("render product list view without search query param", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/items/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(IndexView)).toHaveLength(0);
    expect(wrapper.find(ProductDetailView)).toHaveLength(0);
    expect(wrapper.find(ProductsView)).toHaveLength(1);
  });

  it("render product detail view", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/items/MLA830042488"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(IndexView)).toHaveLength(0);
    expect(wrapper.find(ProductsView)).toHaveLength(0);
    expect(wrapper.find(ProductDetailView)).toHaveLength(1);
  });

  it("render index", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(ProductsView)).toHaveLength(0);
    expect(wrapper.find(ProductDetailView)).toHaveLength(0);
    expect(wrapper.find(IndexView)).toHaveLength(1);
  });

  it("render index for an unknown path", () => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/unknown/path"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(ProductsView)).toHaveLength(0);
    expect(wrapper.find(ProductDetailView)).toHaveLength(0);
    expect(wrapper.find(IndexView)).toHaveLength(1);
  });
});
