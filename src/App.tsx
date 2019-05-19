import React, { Component } from "react";
import { Task } from "./models/task";
import { NewTaskForm } from "./components/NewTaskForm";

interface State {
  newTask: Task;
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    tasks: []
  };

  private addTask = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState((previousState: State) => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ""
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  };

  private deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };

  private handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: e.target.value
      }
    });
  };

  render() {
    const { newTask } = this.state;

    return (
      <div className="App">
        <h2>Hello React TS!</h2>
        <NewTaskForm
          task={newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
      </div>
    );
  }
}

export default App;
