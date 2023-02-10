import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Input.module.css";

interface TaskProps {
  onAddTask: (task: string) => void;
}
export function Input({ onAddTask }: TaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event?.target.value);
  }

  function throwTask(event: FormEvent) {
    event.preventDefault();
    onAddTask(newTaskText);
    setNewTaskText("");
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={throwTask} className={styles.addTaskForm}>
        <input
          onChange={handleTaskText}
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={newTaskText}
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}
