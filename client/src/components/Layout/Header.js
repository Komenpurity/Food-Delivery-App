import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Orders App</h1> 
        <Navbar />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </>
  );
};

export default Header;
