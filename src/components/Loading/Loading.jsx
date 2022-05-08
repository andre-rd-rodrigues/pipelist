import React from "react";
import { SyncLoader } from "react-spinners";
import styles from "./loading.module.scss";

const Loading = ({
  color = "rgb(54, 215, 183)",
  loading,
  size = 20,
  type = "SyncLoader",
  styling
}) => {
  const components = {
    SyncLoader
  };

  const Loader = components[type];

  return (
    loading && (
      <div style={styling} className={styles.loader} data-testid="loader">
        <Loader color={color} loading={loading} size={size} />
      </div>
    )
  );
};

export default Loading;
