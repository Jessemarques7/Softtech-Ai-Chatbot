"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
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
              <div className={styles.featureItem}>
                <h3>Chamados</h3>
                <p>Visualizar e responder chamados existentes.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Dashbords</h3>
                <p>
                  Acessar e criar Dashboards para analisar as métricas dos
                  atendimentos.
                </p>
              </div>
              <div className={styles.featureItem}>
                <h3>AiTech</h3>
                <p>Inteligencia Artificial para auxilio nos atendimentos.</p>
              </div>
            </div>
          </section>

          <Link href="/chats">
            <button className={styles.button}>
              Começar <span>&rarr;</span>
            </button>
          </Link>
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
