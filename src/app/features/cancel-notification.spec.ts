import { Notification } from "../entities/notification";
import { CancelNotification } from "./cancel-notification";
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
        return 1;
    }
}

describe('Cancel Notification', () => {
    beforeEach(() => notificationsMock = []);

    it('should not find a notification', async () => {
        const cancelNotification = new CancelNotification(notificationRepository);

        expect(() => {
            return cancelNotification.execute({ notificationId: 'fake-id'})
        }).rejects.toThrow(NotificationNotFound);
    });
});