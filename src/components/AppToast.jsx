import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppToast = (message, type) => {
  switch (type) {
    case "success":
      return toast.success(
        <div>
          <p>{message}</p>
        </div>
      );
    case "error":
      return toast.error(
        <div>
          <p>{message}</p>
        </div>
      );
    case "warning":
      return toast.warning(
        <div>
          <p>{message}</p>
        </div>
      );
    case "info":
      return toast.info(
        <div>
          <p>{message}</p>
        </div>
      );
    default:
      return null;
  }
};
export default AppToast;
