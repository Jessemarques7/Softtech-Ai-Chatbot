"use client";
import Link from "next/link";
import styles from "./page.module.scss";

import Header from "@/_components/Header/Header";
import MenuBar from "@/_components/Menu/MenuBar";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <div className={styles.container}>
        <MenuBar isOpen={isOpen} />
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.title}>
              <h1>AI Tech Solutions</h1>
              <Image
                alt="image"
                src={"/images/AI-icon.png"}
                width={80}
                height={80}
              />
            </div>
            <p>
              Sua IA Generativa de Assistente de Suporte Técnico, projetada para
              melhorar a assertividade e produtividade no atendimento do Service
              Desk e AMS nível 2.
            </p>
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/cG-Goloo_PE?si=7ilkbqv28mGVLLDK"
                title="Video Pitch - Softteck Ia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <section className={styles.features}>
            <div>
              <p>
                Nosso sistema de gerenciamento de chamados oferece uma solução
                completa para a organização e resolução de solicitações de
                suporte. Com nossa plataforma, você pode:
              </p>
            </div>
            <div className={styles.featureList}>
              <Link href={"/chamados"} className={styles.featureItem}>
                <h3>Visualizar Chamados</h3>
                <p> Acesso a todos os chamados existentes.</p>
              </Link>
              <Link href={"/dashboard"} className={styles.featureItem}>
                <h3>Acessar Dashboards</h3>
                <p>Analisar as métricas dos atendimentos.</p>
              </Link>
              <Link href={"/chats"} className={styles.featureItem}>
                <h3>AI Tech</h3>
                <p>Inteligência Artificial para auxílio nos atendimentos.</p>
              </Link>
            </div>
          </section>

          <Link href="/chats">
            <button className={styles.button}>
              Começar <span>&rarr;</span>
            </button>
          </Link>

          <div className={styles.containervideo2}>
            <div className={styles.textVideo2}>
              <h2>Projeto</h2>
              <p>
                Organizamos o atendimento da sua empresa, acelerar as respostas
                dos chamados com qualidade e disponibilizamos os resultados
                utilizando Dashboards.
              </p>
              <p>A Seguir o making off e projeto inicial da plataforma:</p>
            </div>

            <div className={styles.video2}>
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
