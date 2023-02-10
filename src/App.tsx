import { useState } from "react";
import "./App.css";
import "./global.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  content: string;
  isChecked: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  function addTask(task: string) {
    const newTaskObject = {
      id: uuidv4(),
      content: task,
      isChecked: false,
    };

    setTaskList([...taskList, newTaskObject]);
  }
  function deleteTask(id: string) {
    const newTaskList = taskList.filter((task) => {
      return id !== task.id;
    });
    setTaskList(newTaskList);
  }

  function checkTaskOnList(id: string) {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    });
    setTaskList(newTaskList);
  }

  return (
    <>
      <Header />
      <Input onAddTask={addTask} />
      <List
        onCheckTaskOnList={checkTaskOnList}
        onDeleteTask={deleteTask}
        taskList={taskList}
      />
    </>
  );
}

export default App;
