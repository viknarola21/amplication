import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string | null;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
