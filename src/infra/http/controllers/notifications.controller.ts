import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';

import { CreateNotificationBody } from '../dto/create-notification-body';

import { SendNotification } from 'src/app/features/send-notification';
import { HttpNotificationMapper } from '../mappers/http-notification-mapper';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async createNotification(@Body() notificationReq: CreateNotificationBody) {
    const { notification } = await this.sendNotification.execute(notificationReq);

    return { notification: HttpNotificationMapper.toHttpResponse(notification) };
  }
}
