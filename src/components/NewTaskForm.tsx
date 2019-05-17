import React from 'react';
import { Task } from '../models/task';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.ChangeEvent<HTMLFormElement>) => void;
  task: Task;
}

export const NewTaskForm: React.FC<Props> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={task.name} />
    <button type="submit">Add a task</button>
  </form>
);