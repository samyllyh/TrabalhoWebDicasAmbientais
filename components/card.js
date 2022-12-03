import Router from "next/router";
import Button from "./button";
import styles from "./card.module.css";

export default function Card({ title, content }) {
  const goToUpdatePage = () =>
    Router.push(`/atualizar-dica?title=${title}&content=${content}`);

  return (
    <div className={styles.card}>
      <textarea className={styles.title} rows={1} readOnly value={title} />
      <textarea className={styles.text} readOnly value={content} />
      <div className={styles.buttons}>
        <Button
          color="#a22"
          onClick={() => alert("Remover")}
          content="Remover"
        />
        <Button color="#22a" onClick={goToUpdatePage} content="Atualizar" />
      </div>
    </div>
  );
}
