import { Notification } from "./notification";
import { NotificationContent } from "./notification-content";

describe('Notification', () => {
    it('should create a notification', () => {
        const notification = new Notification(
            '1', 
            'CAT1', 
            new NotificationContent("Content"));
        
        expect(notification).toBeTruthy();
    });
});