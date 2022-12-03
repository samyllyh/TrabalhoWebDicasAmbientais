import Image from "next/image";
import Link from "next/link";
import styles from "./addCard.module.css";

export default function AddCard() {
  return (
    <Link href="/adicionar-dica">
      <button className={styles.card} type="button">
        <Image src="/plus.svg" width={150} height={150} alt="Plus sign" />
      </button>
    </Link>
  );
}
