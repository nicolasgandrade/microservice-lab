export class NotificationContent {
    private readonly content: string;

    constructor(content: string) {
        const isContentLengthValid = this.validateContentLength(content);

        if (!isContentLengthValid) {
            throw new Error("Content must have at least 5, and less than 256 characters.");
        }

        this.content = content;
    }

    private validateContentLength(content: string): boolean {
        return content.length >= 5 && content.length <= 255;
    }

    get value(): string {
        return this.content;
    }
}