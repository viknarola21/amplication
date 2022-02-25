import { Project } from "../project/Project";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Array<Project>;
  roles: Array<string>;
  updatedAt: Date;
  user?: Array<Task>;
  username: string;
};
