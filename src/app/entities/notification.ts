import { NotificationContent } from "./notification-content";

export class Notification {
    private _recipientId: string;
    private _category: string;
    private _content: NotificationContent;
    private _readAt?: Date | null;
    private _createdAt: Date;

    constructor(recipientId: string, 
                category: string, 
                content: NotificationContent,  
                createdAt: Date, 
                readAt?: Date | null) {
        this._recipientId = recipientId;
        this._category = category;
        this._content = content;
        this._createdAt = createdAt;
        this._readAt = readAt;
    }

    public get recipientId(): string {
        return this._recipientId;
    }

    public set recipientId(recipientId: string) {
        this._recipientId = recipientId;
    }

    public get category(): string {
        return this._category;
    }

    public set category(category: string) {
        this._category = category;
    }

    public get content(): NotificationContent {
        return this._content;
    }

    public set content(content: NotificationContent) {
        this._content = content;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public get readAt(): Date | null | undefined {
        return this._readAt;
    }

    public set readAt(readAt: Date | null | undefined) {
        this._readAt = readAt;
    }
}