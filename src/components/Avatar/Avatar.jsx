import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import styles from "./avatar.module.scss";

const Avatar = ({ src, size = 4, editPicture }) => {
  const [uploadedPicture, setUploadedPicture] = useState(undefined);
  return (
    <div
      className={styles.avatar}
      id="app_avatar"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        backgroundImage: `url(${
          src ||
          uploadedPicture ||
          process.env.PUBLIC_URL + "/images/avatar.png"
        })`
      }}
    >
      {editPicture && (
        <div role="button" type="file" name="file">
          <FeatherIcon icon="camera" color="white" size={size * 6} />
        </div>
      )}
    </div>
  );
};

export default Avatar;
