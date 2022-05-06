import Notification from "components/Notification/Notification";

const notificationReload = (message, type) => {
  Notification(message, type);
  return setTimeout(() => {
    window.location.reload();
  }, 1800);
};

export { notificationReload };
