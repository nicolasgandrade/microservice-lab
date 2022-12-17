import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { NotificationContent } from "../entities/notification-content";
import { NotificationRepository } from "../repositories/notification-repository";

export interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

export interface SendNotificationResponse {
    notification: Notification;
}

@Injectable()
export class SendNotification {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification(
            recipientId, 
            category, 
            new NotificationContent(content)
        );

        this.notificationRepository.create(notification);

        return { notification };
    }
}