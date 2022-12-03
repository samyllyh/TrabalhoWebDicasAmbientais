import AddCard from "../components/addCard";
import Card from "../components/card";
import Header from "../components/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header title="DICAS" />
      <div className={styles.content}>
        <AddCard />
        <Card title="Lorem Ipsum" content="Lorem Ipsum" />
      </div>
    </>
  );
}
