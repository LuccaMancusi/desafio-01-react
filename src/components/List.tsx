import { useState } from "react";
import styles from "./List.module.css";
import { Task } from "./Task";

export function List() {
  return (
    <div className={styles.listContainer}>
      <header>
        <p className={styles.blue}>
          Tarefas Criadas <span>5</span>
        </p>
        <p className={styles.purple}>
          Concluídas <span>2 de 5</span>
        </p>
      </header>
      <div>
        <Task />
      </div>
    </div>
  );
}
