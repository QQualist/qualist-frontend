import { AuditReminderNotification } from "@/components/NotificationsLayout/audit-reminder";
import { NotificationData, NotificationType } from "@/types/notifications";

export const renderNotification = (notification: NotificationData) => {
    switch (notification.type) {
        case NotificationType.AUDIT_REMINDER:
            return <AuditReminderNotification notification={notification} />
        default:
            return null;
    }
}