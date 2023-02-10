import { useState } from "react";
import styles from "./List.module.css";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";

interface ListProps {
  taskList: string[];
}

export function List({ taskList }: ListProps) {
  return (
    <div className={styles.listContainer}>
      <header>
        <p className={styles.blue}>
          Tarefas Criadas <span>{taskList.length}</span>
        </p>
        <p className={styles.purple}>
          Concluídas <span>2 de {taskList.length}</span>
        </p>
      </header>
      <div>
        {taskList.map((task) => {
          return <Task key={uuidv4()} taskContent={task} />;
        })}
      </div>
    </div>
  );
}
