import URLS from "../constants/urls";
import { get } from "./";

export const getById = async (id) => {
  const res = await get(`${URLS.API}/items/${id}`);

  if (res.status >= 400)
    throw new Error(`Se produjo un error al consultar el producto ${id}`);

  return res.data.item;
};

export const getAll = async (filters) => {
  // Avoid custom filters
  let uri = new URLSearchParams();
  if (filters.q) uri.append("q", filters.q);
  uri.append("limit", 4);

  const res = await get(`${URLS.API}/items?${uri.toString()}`);

  if (res.status >= 400)
    throw new Error(`Se produjo un error al buscar los productos`);

  return res.data;
};

export default {
  getById,
  getAll,
};
