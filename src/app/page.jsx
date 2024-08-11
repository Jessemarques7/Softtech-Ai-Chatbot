import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/_components/Header/page";

export default function Home() {
  return (
    <>
      <Header />
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
