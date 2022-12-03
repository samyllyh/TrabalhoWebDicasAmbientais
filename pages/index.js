import axios from "axios";
import AddCard from "../components/addCard";
import Card from "../components/card";
import Header from "../components/header";
import https from "https";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  const res = await axios.get("https://localhost:7181/dicas", { httpsAgent });

  return { props: { data: res.data } };
}

export default function Home({ data }) {
  return (
    <>
      <Header title="DICAS" />
      <div className={styles.content}>
        <AddCard />
        {data.map((tip) => (
          <Card
            key={tip["dicaId"]}
            title={tip["titulo"]}
            content={tip["descrição"]}
          />
        ))}
      </div>
    </>
  );
}
