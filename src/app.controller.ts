import { Controller, Get } from '@nestjs/common';
import { Notification, PrismaPromise } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getNotifications(): PrismaPromise<Notification[]> {
    return this.prisma.notification.findMany();
  }
}
