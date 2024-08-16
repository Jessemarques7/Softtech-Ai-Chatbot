import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image alt="logo" src={"/softtek-logo.png"} width={250} height={100} />
      </header>

      <main className={styles.main}>
        <div>
          <Link href={"/chats"}>
            <button className={styles.button}>
              Get Started <span>&rarr;</span>
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
