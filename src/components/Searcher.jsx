import React, { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SearchIconUrl from "../assets/img/icons/search.png";
import { NUNCA_DEJES_DE_BUSCAR } from "../constants/strings";

const Searcher = () => {
  const iptSearch = useRef(null);
  const history = useHistory();
  const { search } = useLocation();

  const goToProductList = (query) => history.push(`/items?search=${query}`);

  // Checking changes in the url
  useEffect(() => {
    iptSearch.current.value = search
      ? new URLSearchParams(search).get("search")
      : "";
  }, [search]);

  // Checking for enter press
  useEffect(() => {
    let ipt = iptSearch.current;
    const onKeyPress = ({ keyCode }) => {
      if (keyCode === 13 && ipt.value) goToProductList(ipt.value);
    };

    ipt.addEventListener("keypress", onKeyPress);
    return () => ipt.removeEventListener("keypress", onKeyPress);
  }, []);

  const searchHandler = () => {
    if (!iptSearch.current.value) iptSearch.current.focus();
    goToProductList(iptSearch.current.value);
  };

  return (
    <div className="searcher-container">
      <input placeholder={NUNCA_DEJES_DE_BUSCAR} ref={iptSearch} />
      <button onClick={searchHandler}>
        <img src={SearchIconUrl} alt="Search icon"></img>
      </button>
    </div>
  );
};

export default Searcher;
