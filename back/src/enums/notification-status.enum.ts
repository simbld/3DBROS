import { registerEnumType } from "@nestjs/graphql";

/**
 * Enum representing the status of a notification in the e-commerce system.
 * @enum {string} NotificationStatus
 */
export enum NotificationStatus {
  UNREAD = "UNREAD",
  READ = "READ",
}

registerEnumType(NotificationStatus, {
  name: "NotificationStatus",
  description: "The status of the notification",
});
