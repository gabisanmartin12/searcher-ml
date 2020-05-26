import React from "react";
import logo from "../assets/img/logo.png";
import Container from "./Container";
import Searcher from "./Searcher";

const Header = () => {
  return (
    <header>
      <Container>
        <img src={logo} alt="Logo"></img>
        <Searcher />
      </Container>
    </header>
  );
};

export default Header;
