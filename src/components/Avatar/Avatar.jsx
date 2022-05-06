import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
import styles from "./avatar.module.scss";

const Avatar = ({ src, size = 4, editPicture }) => {
  const [uploadedFile, setUploadedFile] = useState(undefined);
  const [uploadedPicture, setUploadedPicture] = useState(undefined);
  let inputFile = useRef();

  const postPicture = async () => {
    let formData = new FormData();
    formData.append("image", inputFile.current.input);

    return axios
      .post(
        `/persons/${editPicture}/picture`,
        {
          file: formData
        },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      )
      .then(() => {
        console.log("ok");
      })
      .catch(() => {
        return;
      });
  };

  const handleChange = (e) => {
    setUploadedFile(e.target.files[0]);
    setUploadedPicture(URL.createObjectURL(e.target.files[0]));
    return postPicture();
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
          <input
            type="file"
            name="file"
            onChange={handleChange}
            ref={inputFile}
          />
        </div>
      )}
    </div>
  );
};

export default Avatar;
