import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image alt="logo" src={"/softtek-logo.png"} width={130} height={42} />
      <nav className={styles.menu}>
        <Link className={styles.link} href={"/chamados"}>
          Chamados
        </Link>
        <Link className={styles.link} href={"/chamados"}>
          Chat
        </Link>
      </nav>
    </header>
  );
}
