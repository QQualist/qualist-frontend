import { ContextNotifications } from "@/types/ContextNotifications";
import { NotificationData } from "@/types/notifications";
import { connectToSSE } from "@/utils/notificationClient";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import NotificationSound from "../assets/sounds/notification_sound.wav";

interface INotificationsProvider {
  children: ReactNode;
}

export const NotificationContext = createContext<
  ContextNotifications | Record<string, never>
>({});

const NotificationsProvider = ({ children }: INotificationsProvider) => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  //browser TAB title
  const [titleTab, setTitleTab] = useState(document.title);


  const playNotificationSound = useCallback(() => {
    // Emits sound when the user is focused on another TAB
    if (document.hidden) {
      const notificationSound = new Audio(NotificationSound);
      notificationSound.play();
    }
  }, []);

  useEffect(() => {
    const eventSource = connectToSSE(
      "/audit-reminders/event",
      "AUDIT_REMINDER",
      function (event: MessageEvent) {
        const data: NotificationData = JSON.parse(event.data);
        setNotifications((prevNotifications) => [...prevNotifications, data]);
        // Emits a notification sound if you receive a new notification
        playNotificationSound();
      },
      function (event: Event) {
        console.error("EventSource failed:", event);
      }
    );

    return () => {
      eventSource.close();
    };
  }, [playNotificationSound, titleTab ]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        document.title = "Qualist";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    document.title = notifications.length > 0 ? `(${notifications.length}) Novas Notificações` : "Qualist";
  }, [notifications.length]);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationsProvider;
