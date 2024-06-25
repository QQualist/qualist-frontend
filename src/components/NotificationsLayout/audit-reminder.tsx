import { MdEvent } from "react-icons/md";
import Notification from "../Notification";
import { NotificationAuditReminder } from "@/types/notifications";
import { useTranslation } from "react-i18next";

interface IAuditReminders {
  notification: NotificationAuditReminder;
}

export const AuditReminderNotification = ({
  notification,
}: IAuditReminders) => {
  const { t } = useTranslation();

  const formatLeftTime = (seconds: number) => {
    const dayInSeconds = 24 * 60 * 60;
    const hourInSeconds = 60 * 60;
    const minuteInSeconds = 60;

    const days = Math.floor(seconds / dayInSeconds);
    seconds -= days * dayInSeconds;

    const hours = Math.floor(seconds / hourInSeconds);
    seconds -= hours * hourInSeconds;

    const minutes = Math.floor(seconds / minuteInSeconds);

    let result = "";

    if (days > 0) {
      result += `${days} ${t(days > 1 ? "days" : "day")}`;
    }

    if (hours > 0) {
      result += `${result ? " " + t("and") + " " : ""}${hours} ${t(
        hours > 1 ? "hours" : "hour"
      )}`;
    }

    if (minutes > 0) {
      result += `${result ? " " + t("and") + " " : ""}${minutes} ${t(
        minutes > 1 ? "minutes" : "minute"
      )}`;
    }

    return result || t("Less than 1 minute");
  };

  return (
    <Notification.Root>
      <Notification.Icon icon={MdEvent} />
      <Notification.Content>
        <div className="flex flex-col">
          <span>
            {formatLeftTime(notification.remainingTime)} {t("to run the audit")}{" "}
            <strong>{notification.auditName}</strong>
          </span>
        </div>
      </Notification.Content>
    </Notification.Root>
  );
};

export default AuditReminderNotification;
