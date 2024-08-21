import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import Header from "@/_components/Header/Header";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image alt="logo" src="/softtek-logo.png" width={250} height={100} />
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Bem-vindo à AgroAI</h1>
          <p>
          Nosso sistema de gerenciamento de chamados oferece uma solução completa para a organização e resolução de solicitações de suporte. Com nossa plataforma, você pode:
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
              <p>Acessar e criar Dashboards para analisar as métricas dos atendimentos.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>AgroAI</h3>
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

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AgroAI. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
