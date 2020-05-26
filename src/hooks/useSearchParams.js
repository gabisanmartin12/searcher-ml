import { useLocation } from "react-router-dom";

export const useSearchParams = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

export default useSearchParams;
