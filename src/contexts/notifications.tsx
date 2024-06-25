import { ContextNotifications } from "@/types/ContextNotifications";
import { NotificationData } from "@/types/notifications";
import { connectToSSE } from "@/utils/notificationClient";
import { ReactNode, createContext, useEffect, useState } from "react";

interface INotificationsProvider {
  children: ReactNode;
}

export const NotificationContext = createContext<
  ContextNotifications | Record<string, never>
>({});

const NotificationsProvider = ({ children }: INotificationsProvider) => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  useEffect(() => {
    const eventSource = connectToSSE(
      "/audit-reminders/event",
      "AUDIT_REMINDER",
      function (event: MessageEvent) {
        const data: NotificationData = JSON.parse(event.data);
        setNotifications((prevNotifications) => [...prevNotifications, data]);
      },
      function (event: Event) {
        console.error("EventSource failed:", event);
      }
    );

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationsProvider;
