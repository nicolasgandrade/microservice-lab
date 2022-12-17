import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { NotificationContent } from "../entities/notification-content";
import { NotificationRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found.error";

export interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFound();
        }

        return this.notificationRepository.cancel(notificationId);
    }
}