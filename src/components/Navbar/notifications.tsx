import React, { useContext, useEffect, useState } from "react";
import { MdNotifications } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { renderNotification } from "@/utils/render-notification";
import { NotificationContext } from "@/contexts/notifications";
import { ContextNotifications } from "@/types/ContextNotifications";
import Notification from "../Notification";

const Notifications = () => {
  const { t } = useTranslation();
  const { notifications, setNotifications } = useContext(
    NotificationContext
  ) as ContextNotifications;
  const [animate, setAnimate] = useState<boolean>(true);

  // Removes all notifications, each every 100 seconds for transition purposes
  const handleCleanNotifications = () => {
    const intervalId = setInterval(() => {
      setNotifications((prevNotifications) => {
        if (prevNotifications.length === 0) {
          clearInterval(intervalId);
          return prevNotifications;
        }
        return prevNotifications.slice(1);
      });
    }, 100);
  };

  useEffect(() => {
    if (notifications.length >= 1) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [notifications.length]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative">
        <MdNotifications className="text-dark-blue dark:text-white" size={24} />
        {notifications.length >= 1 && (
          <span
            className={`absolute w-max h-max p-1 flex -top-1 -right-1 items-center justify-center text-[8px] font-bold leading-none text-white bg-light-blue rounded-full ${
              animate ? "animate-bounce-notification" : ""
            }`}
          >
            {notifications.length > 10 ? "+10" : `0${notifications.length}`}
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 p-0 border-none">
        <div className="flex w-full p-3 justify-between dark:bg-dark-gray border-b border-light-blue/40">
          <span className="text-sm font-bold">{t("Notifications")}</span>
          <button
            type="button"
            className="text-xs font-bold text-light-blue"
            onClick={handleCleanNotifications}
          >
            {t("Mark all as read")}
          </button>
        </div>
        <div className="flex flex-col">
          {notifications.length === 0 && (
            <div className="flex w-full items-center p-5  gap-3 dark:bg-dark-gray border-light-gray/30 border-b last:border-b-0">
              <span className="w-full text-sm text-center dark:text-light-gray leading-relaxed">
                {t("There are no notifications at the moment.")}
              </span>
            </div>
          )}
          {notifications.map((notification, index) => (
            <React.Fragment key={index}>
              {renderNotification(notification)}
            </React.Fragment>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
