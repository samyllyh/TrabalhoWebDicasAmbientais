import Button from "./button";
import styles from "./card.module.css";

export default function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{content}</p>
      <div className={styles.buttons}>
        <Button
          color="#22a"
          onClick={() => alert("Atualizar")}
          content="Atualizar"
        />
        <Button
          color="#a22"
          onClick={() => alert("Remover")}
          content="Remover"
        />
      </div>
    </div>
  );
}
