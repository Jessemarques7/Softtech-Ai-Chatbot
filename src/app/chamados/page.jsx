"use client";
import Header from "@/_components/Header/Header";
import styles from "./page.module.scss";
import data from "../../utils/baseDados";
import Chamado from "@/_components/Chamado/Chamado";

export default function Chamados() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHead}>
              <th className={styles.rowTitle}>Chamado</th>
              <th className={styles.rowTitle}>Categoria</th>
              <th className={styles.rowTitle}>Solicitante</th>
              <th className={styles.rowTitle}>Status</th>
              <th className={styles.rowTitle}>Aberto</th>
            </tr>
          </thead>
          <tbody className={styles.tBody}>
            {data.map((chamado, index) => (
              <Chamado chamado={chamado} key={index} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
