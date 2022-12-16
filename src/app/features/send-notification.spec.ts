import { Notification } from "../entities/notification";
import { SendNotification, SendNotificationRequest } from "./send-notification";

let notificationsMock: Notification[] = [];

const notificationRepository = {
    async create(notification: Notification) {
        notificationsMock.push(notification);
    }
}

describe('Send Notification', () => {
    beforeEach(() => {
        notificationsMock = [];
    });

    it('should send a notification', async () => {
        const sendNotification = new SendNotification(notificationRepository);
        const sendNotificationRequest: SendNotificationRequest = {
            recipientId: '1',
            content: 'New Content',
            category: 'CAT1'
        };

        await sendNotification.execute(sendNotificationRequest);

        expect(notificationsMock).toHaveLength(1);
    });
});