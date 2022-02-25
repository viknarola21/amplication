/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaskWhereInput } from "./TaskWhereInput";
import { Type } from "class-transformer";
import { TaskOrderByInput } from "./TaskOrderByInput";

@ArgsType()
class TaskFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TaskWhereInput,
  })
  @Field(() => TaskWhereInput, { nullable: true })
  @Type(() => TaskWhereInput)
  where?: TaskWhereInput;

  @ApiProperty({
    required: false,
    type: TaskOrderByInput,
  })
  @Field(() => TaskOrderByInput, { nullable: true })
  @Type(() => TaskOrderByInput)
  orderBy?: TaskOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TaskFindManyArgs };
