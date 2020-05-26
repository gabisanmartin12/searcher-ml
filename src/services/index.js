import Axios from "axios";
export const get = (url) => Axios.get(url, { validateStatus: () => true });
