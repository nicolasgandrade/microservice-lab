import { Notification } from "src/app/entities/notification";

export class HttpNotificationMapper {
    static toHttpResponse(notification: Notification) {
        return {
            id: notification.id,
            recipientId: notification.recipientId,
            content: notification.content,
            category: notification.category,
        }
    }
}