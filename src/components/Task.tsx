import check from "..//assets/check.svg";
import checked from "..//assets/checked.svg";
import trash from "..//assets/trash.svg";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.taskCard}>
      <button>
        <img src={check} />
      </button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro
        omnis molestiae hic quos
      </p>
      <button>
        <img src={trash} />
      </button>
    </div>
  );
}
