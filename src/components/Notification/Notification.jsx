import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = (message, type) =>
  toast[type](<p data-testid="notification">{message}</p>);

export default Notification;
