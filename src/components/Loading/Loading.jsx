import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import styles from "./loading.module.scss";

const Loading = ({
  color = "rgb(54, 215, 183)",
  loading,
  size = 20,
  type = "SyncLoader"
}) => {
  switch (type) {
    case "SyncLoader":
      return (
        <div className={styles.loader} data-testid="sync_loader">
          <SyncLoader color={color} loading={loading} size={size} />
        </div>
      );
    default:
      return null;
  }
};

export default Loading;
