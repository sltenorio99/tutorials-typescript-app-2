import React from "react";

import { Task } from "../models/task";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: React.FC<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <li>
      {task.name} <button onClick={onClick}>X</button>
    </li>
  );
};
