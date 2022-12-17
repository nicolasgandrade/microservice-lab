import { IsNotEmpty, IsString, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @IsString()
    @Length(5, 255)
    content: string;

    @IsNotEmpty()
    @IsString()
    category: string;
}