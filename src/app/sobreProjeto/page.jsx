"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/_components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Dados dos integrantes com a mesma foto
const integrantes = [
  {
    nome: "Lucas Gomes Tambasco",
    foto: "/integrantes/lucasT-1.png",
    descricao: "Foi um dos responsáveis pelo desenvolvimento da interface de usuário, criando e implementando componentes interativos para garantir uma experiência de usuário fluida e intuitiva."
  },
  {
    nome: "Thiago dos Santos Cordeiro",
    foto: "/integrantes/",
    descricao: "Descrição do que o integrante realizou no projeto."
  },
  {
    nome: "Jean Giusepe Silva Macedo",
    foto: "/integrantes/",
    descricao: "Descrição do que o integrante realizou no projeto."
  },
  {
    nome: "Jessé Marques Mateus",
    foto: "/integrantes/",
    descricao: "Descrição do que o integrante realizou no projeto."
  },
  {
    nome: "Adrion Agniver Da Silva Jorge",
    foto: "/integrantes/",
    descricao: "Descrição do que o integrante realizou no projeto."
  }
];

export default function SobreProjeto() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.h1}>Integrantes</h1>
          <div className="container my-4">
            <div className="row g-4">
              {integrantes.map((integrante, index) => (
                <div className="col-md-4 col-lg-3" key={index}>
                  <div className={`${styles.card} card`}>
                    <Image
                      alt={integrante.nome}
                      src={integrante.foto}
                      width={250}
                      height={150}
                      className={styles.image}
                    />
                    <div className="card-body">
                      <h5 className={`${styles.cardTitle} card-title`}>
                        {integrante.nome}
                      </h5>
                      <div className={`${styles.buttonContainer} container`}>
                        <button 
                          className="btn btn-link p-0 d-block mt-2" 
                          onClick={() => toggleExpand(index)} 
                          aria-expanded={expandedIndex === index}
                          aria-controls={`collapseText-${index}`}
                        >
                          <i className={`bi ${expandedIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                        </button>

                        {expandedIndex === index && (
                          <div className="mt-3" id={`collapseText-${index}`}>
                            <p className={styles.p}>{integrante.descricao}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
