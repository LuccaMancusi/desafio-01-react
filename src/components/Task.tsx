import unchecked from "..//assets/check.svg";
import checked from "..//assets/checked.svg";
import trash from "..//assets/trash.svg";
import styles from "./Task.module.css";
import { useState } from "react";

interface TaskProps {
  taskContent: string;
  key: string;
}

export function Task({ taskContent, key }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckButton() {
    setIsChecked((state) => {
      return !state;
    });
  }

  return (
    <div className={styles.taskCard}>
      <div className={styles.checkAndText}>
        <button onClick={handleCheckButton}>
          <img src={isChecked ? checked : unchecked} />
        </button>
        <p className={isChecked ? styles.checked : styles.unchecked}>
          {taskContent}
        </p>
      </div>
      <button>
        <img src={trash} />
      </button>
    </div>
  );
}
