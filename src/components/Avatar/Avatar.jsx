import React, { useContext, useState } from "react";
import axios from "api/pipelistAxios";
import Notification from "components/Notification/Notification";
import { LoadingContext } from "context/loading-context";
import FeatherIcon from "feather-icons-react";
import { notificationReload } from "utils/global-utils";
import styles from "./avatar.module.scss";

const Avatar = ({ src, size = 4, profileId }) => {
  const [uploadedPicture, setUploadedPicture] = useState(undefined);
  const { setLoading } = useContext(LoadingContext);

  //Http
  const postPicture = async (uploadedFile) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("file", uploadedFile);

    return axios
      .post(`/persons/${profileId}/picture`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(() => {
        return notificationReload("Picture updated successfully!", "success");
      })
      .catch(() => {
        return Notification(
          "Picture couldn't be updated, please try again later.",
          "error"
        );
      });
  };

  //Actions
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
      {profileId && (
        <div role="button">
          <FeatherIcon icon="camera" color="white" size={size * 6} />
          <input type="file" name="file" onChange={handleUpload} />
        </div>
      )}
    </div>
  );
};

export default Avatar;
