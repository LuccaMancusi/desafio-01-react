import { useState } from "react";
import styles from "./List.module.css";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  content: string;
  isChecked: boolean;
}

interface TaskProps {
  onDeleteTask: (id: string) => void;
  taskList: Task[];
  onCheckTaskOnList: (id: string) => void;
}

export function List({ onCheckTaskOnList, onDeleteTask, taskList }: TaskProps) {
  function howManyCheckedTasks() {
    return taskList.reduce((acc, task) => {
      if (task.isChecked) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  return (
    <div className={styles.listContainer}>
      <header>
        <p className={styles.blue}>
          Tarefas Criadas <span>{taskList.length}</span>
        </p>
        <p className={styles.purple}>
          Concluídas{" "}
          <span>
            {howManyCheckedTasks()} de {taskList.length}
          </span>
        </p>
      </header>
      <div>
        {taskList.map((task) => {
          return (
            <Task
              onCheckTaskOnList={onCheckTaskOnList}
              onDeleteTask={onDeleteTask}
              key={uuidv4()}
              task={task}
            />
          );
        })}
      </div>
    </div>
  );
}
