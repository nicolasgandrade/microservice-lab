import { Notification } from "../entities/notification";
import { SendNotification, SendNotificationRequest } from "./send-notification";

let notificationsMock: Notification[] = [];

const notificationRepository = {
    async create(notification: Notification) {
        notificationsMock.push(notification);
    },
    async findById(notificationId: string) {
        return notificationsMock.find(notification => notification.id == notificationId) ?? null;
    },
    async cancel(notificationId: string) {
        notificationsMock.find((n, idx) => {
            if (n.id == notificationId) {
                notificationsMock.splice(idx, 1);
            }
        });
    },
    async countManyByRecipientId(recipientId: string) {
        return 1;
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