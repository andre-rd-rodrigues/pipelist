import React from "react";
import { Container, Navbar } from "react-bootstrap";
import styles from "./navbar.module.scss";

const AppNavbar = () => {
  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg navbar-light fixed-top`}
    >
      <Container>
        <Navbar.Brand>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Pipedrive"
          />
        </Navbar.Brand>
      </Container>
    </nav>
  );
};

export default AppNavbar;
