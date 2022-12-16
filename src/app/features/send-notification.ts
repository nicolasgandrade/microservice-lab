import { Notification } from "../entities/notification";
import { NotificationContent } from "../entities/notification-content";

export interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

export interface SendNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification(
            recipientId, 
            category, 
            new NotificationContent(content)
        );

        return { notification };
    }
}