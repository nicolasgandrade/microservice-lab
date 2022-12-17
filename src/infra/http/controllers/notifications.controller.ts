import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';

import { Notification, PrismaPromise } from '@prisma/client';
import { CreateNotificationBody } from '../dto/create-notification-body';

import { PrismaService } from '../../db/prisma/prisma.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getNotifications(): PrismaPromise<Notification[]> {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() notificationReq: CreateNotificationBody) {
    const { recipientId, content, category } = notificationReq;
  }
}
