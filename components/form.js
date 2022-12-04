import axios from "axios";
import Button from "../components/button";
import Router from "next/router";
import https from "https";
import styles from "./form.module.css";
import { useState } from "react";

export default function Form({ id, title, content, isAdd }) {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  const [titleState, setTitle] = useState(title);
  const [contentState, setContent] = useState(content);

  const goToHome = () => Router.push("/");

  const addTip = async () => {
    await axios.post(
      "https://localhost:7181/dicas",
      { titulo: titleState, descrição: contentState },
      { httpsAgent }
    );

    goToHome();
  };

  const updateTip = async () => {
    await axios.put(
      `https://localhost:7181/dicas/${id}`,
      { dicaId: id, titulo: titleState, descrição: contentState },
      { httpsAgent }
    );

    goToHome();
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.title}
        type="text"
        placeholder="Título"
        onChange={(e) => setTitle(e.target.value)}
        value={titleState}
      />
      <textarea
        className={styles.text}
        placeholder="Descrição"
        onChange={(e) => setContent(e.target.value)}
        value={contentState}
      />
      <div className={styles.buttons}>
        <Button color="#a22" onClick={goToHome} content="Voltar" />
        <Button
          color="#22a"
          onClick={isAdd ? addTip : updateTip}
          content={isAdd ? "Salvar" : "Atualizar"}
        />
      </div>
    </form>
  );
}
