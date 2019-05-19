import React from "react";

import { Task } from "../models/task";
import { TaskListItem } from "./TaskListItem";

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const TasksList: React.FC<Props> = ({ tasks, onDelete }) => (
  <ul>
    {tasks.map(task => (
      <TaskListItem task={task} onDelete={onDelete} />
    ))}
  </ul>
);
