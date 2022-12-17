import { Module } from "@nestjs/common";
import { SendNotification } from "src/app/features/send-notification";
import { DatabaseModule } from "../db/database.module";
import { NotificationsController } from "./controllers/notifications.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification]
})
export class HttpModule {}