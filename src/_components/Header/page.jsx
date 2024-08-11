import Image from "next/image";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image alt="logo" src={"/softtek-logo.png"} width={250} height={100} />
    </header>
  );
}
