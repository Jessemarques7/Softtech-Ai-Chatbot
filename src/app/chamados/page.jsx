"use client";
import Header from "@/_components/Header/Header";
import styles from "./page.module.scss";
import data from "../../utils/baseDados";
import Chamado from "@/_components/Chamado/Chamado";
import MenuBar from "@/_components/Menu/MenuBar";
import { useState } from "react";

export default function Chamados() {
  const [isOpen, setIsOpen] = useState(true); // window.innerWidth > 768
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <main className={styles.main}>
        <MenuBar isOpen={isOpen} />
        <div className={styles.container}>
          <div className={styles.ContainerTable}>
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
          </div>
        </div>
      </main>
    </div>
  );
}
