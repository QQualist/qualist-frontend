import { NotificationData } from "./notifications";

export type ContextNotifications = {
  notifications: NotificationData[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationData[]>>;
};
