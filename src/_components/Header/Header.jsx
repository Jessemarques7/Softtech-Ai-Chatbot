import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Header({ setIsOpen }) {
  return (
    <header className={styles.header}>
      <div>
        <button onClick={() => setIsOpen((e) => !e)} className={styles.button}>
          <FiMenu className={styles.icon} />
        </button>

        <Link href={"/"}>
          <Image
            alt="logo"
            src={"/softtek-logo.png"}
            width={120}
            height={42}
            className={styles.image}
          />
        </Link>
      </div>
      <nav className={styles.menu}></nav>
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
