export enum NotificationType {
  AUDIT_REMINDER = "AUDIT_REMINDER",
}

export interface NotificationAuditReminder {
  type: NotificationType.AUDIT_REMINDER;
  auditName: string;
  remainingTime: number;
  message: string;
}

export type NotificationData = NotificationAuditReminder; 
