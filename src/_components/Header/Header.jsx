import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image
          alt="logo"
          src={"/softtek-logo.png"}
          width={120}
          height={42}
          className={styles.image}
        />
      </Link>
      <nav className={styles.menu}>
        <Link className={styles.link} href={"/chats"}>
          Chat
        </Link>
        <Link className={styles.link} href={"/chamados"}>
          Chamados
        </Link>
        <Link className={styles.link} href={"/chamados"}>
          Dashboard
        </Link>
      </nav>
      <Image
        alt="user"
        src={"/images/user-icon.png"}
        height={42}
        width={42}
        className={styles.image}
      />
    </header>
  );
}
