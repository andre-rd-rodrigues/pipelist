import React, { useState } from "react";
import axios from "api/pipelistAxios";
import FeatherIcon from "feather-icons-react";
import styles from "./avatar.module.scss";

const Avatar = ({ src, size = 4, editPicture }) => {
  const [uploadedPicture, setUploadedPicture] = useState(undefined);

  //Http
  const postPicture = async (uploadedFile) => {
    let formData = new FormData();
    formData.append("file", uploadedFile);

    return axios
      .post(`/persons/${editPicture}/picture`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(() => {})
      .catch(() => {
        return;
      });
  };

  const handleUpload = (input) => {
    setUploadedPicture(URL.createObjectURL(input.target.files[0]));
    return postPicture(input.target.files[0]);
  };

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
        <div role="button">
          <FeatherIcon icon="camera" color="white" size={size * 6} />
          <input type="file" name="file" onChange={handleUpload} />
        </div>
      )}
    </div>
  );
};

export default Avatar;
