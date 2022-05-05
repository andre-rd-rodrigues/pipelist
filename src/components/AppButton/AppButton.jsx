import React from "react";
import styles from "./appbutton.module.scss";

const AppButton = (props) => {
  const styling = {
    backgroundColor: props.color !== "green" && "rgba(255, 255, 255, 0.5)",
    color: props.color !== "green" && "black",
    border: props.color !== "green" && "1px solid #b0b0b0"
  };
  return (
    <button style={styling} className={styles.appButton} {...props}>
      {props.label}
    </button>
  );
};

export default AppButton;
