import React from "react";
import colors from "styles/_mixins.scss";
import styles from "./appbutton.module.scss";

const AppButton = (props) => {
  const { color, label } = props;
  const styling = {
    backgroundColor: !color ? "rgba(255, 255, 255, 0.5)" : colors[color],
    color: !color ? colors.dark : "white",
    border: !color && "1px solid #b0b0b0"
  };
  return (
    <button style={styling} className={styles.appButton} {...props}>
      {label}
    </button>
  );
};

export default AppButton;
