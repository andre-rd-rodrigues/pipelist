import React from "react";
import { Navbar } from "react-bootstrap";
import styles from "./navbar.module.scss";

const AppNavbar = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
      <Navbar.Brand>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="Pipedrive"
        />
      </Navbar.Brand>
    </nav>
  );
};

export default AppNavbar;
