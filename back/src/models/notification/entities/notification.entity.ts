import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsInt, IsString, IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { User } from "@user/entities/user.entity";
import { NotificationStatus } from "@enums/notification-status.enum";

/**
 * Entity representing a Notification in the e-commerce system.
 * This class defines the structure of a Notification for GraphQL responses.
 * @class Notification
 * @property {number} id - The ID of the notification.
 * @property {string} message - The content of the notification.
 * @property {NotificationStatus} status - The status of the notification (read/unread).
 * @property {number} userId - The ID of the user who received the notification.
 * @property {User} user - The user entity associated with the notification.
 * @property {Date} createdAt - The date when the notification was created.
 * @constructor Notification
 */
@ObjectType()
export class Notification {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  message: string;

  @Field(() => NotificationStatus)
  @IsNotEmpty()
  @Type(() => String)
  status: NotificationStatus;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @Field(() => User)
  @IsNotEmpty()
  @Type(() => User)
  user: User;

  @Field()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  constructor(
    id: number,
    message: string,
    status: NotificationStatus,
    userId: number,
    user: User,
    createdAt: Date,
  ) {
    this.id = id;
    this.message = message;
    this.status = status;
    this.userId = userId;
    this.user = user;
    this.createdAt = createdAt;
  }
}
