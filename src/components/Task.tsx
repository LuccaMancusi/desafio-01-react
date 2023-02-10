import unchecked from "..//assets/check.svg";
import checked from "..//assets/checked.svg";
import trash from "..//assets/trash.svg";
import styles from "./Task.module.css";
import { useState } from "react";

interface Task {
  id: string;
  content: string;
  isChecked: boolean;
}
interface TaskProps {
  task: Task;
  onDeleteTask: (id: string) => void;
  onCheckTaskOnList: (id: string) => void;
}

export function Task({ task, onDeleteTask, onCheckTaskOnList }: TaskProps) {
  function handleCheckButton() {
    onCheckTaskOnList(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.taskCard}>
      <div className={styles.checkAndText}>
        <button onClick={handleCheckButton}>
          <img src={task.isChecked ? checked : unchecked} />
        </button>
        <p className={task.isChecked ? styles.checked : styles.unchecked}>
          {task.content}
        </p>
      </div>
      <button onClick={handleDeleteTask}>
        <img src={trash} />
      </button>
    </div>
  );
}
