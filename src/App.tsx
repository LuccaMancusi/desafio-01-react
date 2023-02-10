import { useState } from "react";
import "./App.css";
import "./global.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { List } from "./components/List";

function App() {
  const [taskList, setTaskList] = useState<string[]>([]);

  function addTask(task: string) {
    setTaskList([...taskList, task]);
    console.log(taskList);
  }
  return (
    <>
      <Header />
      <Input onAddTask={addTask} />
      <List taskList={taskList} />
    </>
  );
}

export default App;
