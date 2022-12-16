import { SendNotification, SendNotificationRequest } from "./send-notification";

describe('Send Notification', () => {
    it('should send a notification', async () => {
        const sendNotification = new SendNotification();
        const sendNotificationRequest: SendNotificationRequest = {
            recipientId: '1',
            content: 'New Content',
            category: 'CAT1'
        };

        const { notification } = await sendNotification.execute(sendNotificationRequest);

        expect(notification).toBeTruthy();
    });
});