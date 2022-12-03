import styles from "./button.module.css";

export default function Button({ color, onClick, content }) {
  return (
    <button
      className={styles.button}
      style={{ background: color }}
      type="button"
      onClick={onClick}
    >
      {content}
    </button>
  );
}
