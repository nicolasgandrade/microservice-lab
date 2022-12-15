import { NotificationContent } from "./notification-content";

describe('Notification Content', () => {
    it('should be able to create a NotificationContent', () => {
        const content = new NotificationContent("New Notification content!");

        expect(content).toBeTruthy();
    });

    it('should be able to retrieve the value of a content', () => {
        const content = new NotificationContent("New Notification content!").value;

        expect(content).toEqual("New Notification content!");
    });

    it('should not be able to create a content with less than 5 characters', () => {
        expect(() => new NotificationContent("1234")).toThrowError();
    });

    it('should not be able to create a content with more than 255 characters', () => {
        expect(() => new NotificationContent("a".repeat(256))).toThrowError();
    });
});