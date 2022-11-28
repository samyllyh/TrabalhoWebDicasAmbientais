import styles from "./addCard.module.css";
import Image from "next/image";

export default function AddCard() {
  return (
    <button className={styles.addCard} type="button">
      <Image src="/plus.svg" width={150} height={150} alt="Plus sign" />
    </button>
  );
}
