import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

/**
 * DTO for updating the status of an item.
 * @class UpdateItemStatusInput
 */
@InputType()
export class UpdateItemStatusInput {
  @Field()
  @IsString()
  status: string;
}
