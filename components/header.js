import styles from "./header.module.css";

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <strong>{title}</strong>
    </header>
  );
}
