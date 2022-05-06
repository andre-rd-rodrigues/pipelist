import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = (message, type) => toast[type](<p>{message}</p>);

export default Notification;
