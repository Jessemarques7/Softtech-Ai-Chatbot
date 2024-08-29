"use client";
import Link from "next/link";
import styles from "./page.module.scss";

import Header from "@/_components/Header/Header";
import MenuBar from "@/_components/Menu/MenuBar";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <div className={styles.container}>
        <MenuBar isOpen={isOpen} />
        <main className={styles.main}>
          <section className={styles.hero}>
            <h1>AI Tech Solutions</h1>
            <p>
              Nosso sistema de gerenciamento de chamados oferece uma solução
              completa para a organização e resolução de solicitações de
              suporte. Com nossa plataforma, você pode:
            </p>
          </section>
          <section className={styles.features}>
            <div className={styles.featureList}>
              <Link href={"/chamados"} className={styles.featureItem}>
                <h3>Chamados</h3>
                <div>Visualizar e responder chamados existentes.</div>
              </Link>
              <Link href={"/dashboard"} className={styles.featureItem}>
                <h3>Dashbords</h3>
                <div>
                  Acessar e criar Dashboards para analisar as métricas dos
                  atendimentos.
                </div>
              </Link>
              <Link href={"/chat"} className={styles.featureItem}>
                <h3>AiTech</h3>
                <div>
                  Inteligencia Artificial para auxilio nos atendimentos.
                </div>
              </Link>
            </div>
          </section>

          <Link href="/chats">
            <button className={styles.button}>
              Começar <span>&rarr;</span>
            </button>
          </Link>

          <div className={styles.videos}>
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/WH6P9Safct4"
                title="17 de maio de 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/WH6P9Safct4"
                title="17 de maio de 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <div>
          &copy; {new Date().getFullYear()} AI Tech Solution. Todos os direitos
          reservados.
        </div>
      </footer>
    </>
  );
}
