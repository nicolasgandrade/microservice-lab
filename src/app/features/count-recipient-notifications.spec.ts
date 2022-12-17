import { Notification } from "../entities/notification";
import { NotificationContent } from "../entities/notification-content";
import { CountRecipientNotifications } from "./count-recipient-notifications";
import { NotificationNotFound } from "./errors/notification-not-found.error";

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
        return notificationsMock.filter(n => n.recipientId == recipientId).length;
    }
}

describe('Count Recipient Notifications', () => {
    beforeEach(() => notificationsMock = []);

    it('should count all the notifications from a recipient', async () => {
        const countRecipientNotifications = new CountRecipientNotifications(notificationRepository);
        for (let i = 0; i < 5; i++) {
            notificationsMock.push(
                new Notification(
                    'fake-id',
                    'CAT1',
                    new NotificationContent('New Content')
                )
            );
        }

        const { count } = await countRecipientNotifications.execute({ recipientId: 'fake-id' });

        expect(count).toEqual(5);
    });
});