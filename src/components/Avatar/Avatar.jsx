import React from "react";
import styles from "./avatar.module.scss";

const Avatar = ({ src, size = 4 }) => {
  return (
    <div
      className={styles.avatar}
      id="app_avatar"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        backgroundImage: `url(${src})`
      }}
    ></div>
  );
};

export default Avatar;
