import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "react-bootstrap";
import { verticalEntrance } from "styles/motion/motionVariants";
import styles from "./navbar.module.scss";

const AppNavbar = () => {
  return (
    <motion.nav
      variants={verticalEntrance}
      initial="hidden"
      animate="visible"
      className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}
    >
      <Navbar.Brand>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="Pipedrive"
        />
      </Navbar.Brand>
    </motion.nav>
  );
};

export default AppNavbar;
