import { PlusCircle } from "phosphor-react";
import styles from "./Input.module.css";

export function Input() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.addTaskForm}>
        <input placeholder="Adicione uma nova tarefa" type="text" />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}
