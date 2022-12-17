import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';

import { Notification, PrismaPromise } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from '../dto/create-notification-body';

import { PrismaService } from '../../prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getNotifications(): PrismaPromise<Notification[]> {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() notificationReq: CreateNotificationBody) {
    const { recipientId, content, category } = notificationReq;
    console.log(notificationReq)
    // await this.prisma.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     content: "New notification sent by the microservice.",
    //     category: "Social",
    //     recipientId: randomUUID()
    //   }
    // });
  }
}
