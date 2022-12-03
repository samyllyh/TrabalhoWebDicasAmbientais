import Button from "../components/button";
import Router from "next/router";
import styles from "./form.module.css";
import { useState } from "react";

const goToHome = () => Router.push("/");

export default function Form({ title, content }) {
  const [titleState, setTitle] = useState(title);
  const [contentState, setContent] = useState(content);

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
        <Button color="#22a" onClick={() => alert("Hello")} content="Salvar" />
      </div>
    </form>
  );
}
