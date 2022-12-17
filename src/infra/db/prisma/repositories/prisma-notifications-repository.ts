import { Injectable } from "@nestjs/common";
import { Notification } from "src/app/entities/notification";
import { NotificationRepository } from "../../../../app/repositories/notification-repository";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
    constructor(private prismaService: PrismaService) {}
    
    async create(notification: Notification): Promise<void> {
        const prismaNotification = PrismaNotificationMapper.toPrismaModel(notification);
        
        await this.prismaService.notification.create({
            data: prismaNotification
        });
    }

    async findById(notificationId: string): Promise<Notification | null> {
        throw new Error("Method not implemented.");
    }

    async cancel(notificationId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
}