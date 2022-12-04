import axios from "axios";
import Button from "./button";
import Router from "next/router";
import https from "https";
import styles from "./card.module.css";

export default function Card({ id, title, content }) {
  const deleteTip = async () => {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    await axios.delete(`https://localhost:7181/dicas/${id}`, { httpsAgent });

    Router.push("/");
  };

  const goToUpdatePage = () =>
    Router.push(`/atualizar-dica?id=${id}&title=${title}&content=${content}`);

  return (
    <div className={styles.card}>
      <textarea className={styles.title} rows={1} readOnly value={title} />
      <textarea className={styles.text} readOnly value={content} />
      <div className={styles.buttons}>
        <Button color="#a22" onClick={deleteTip} content="Remover" />
        <Button color="#22a" onClick={goToUpdatePage} content="Atualizar" />
      </div>
    </div>
  );
}
