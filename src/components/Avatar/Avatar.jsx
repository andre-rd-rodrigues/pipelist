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
        backgroundImage: `url(${
          src || process.env.PUBLIC_URL + "/images/avatar.png"
        })`
      }}
    ></div>
  );
};

export default Avatar;
