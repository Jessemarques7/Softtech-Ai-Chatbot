"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/_components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MenuBar from "@/_components/Menu/MenuBar";

// Dados dos integrantes com a mesma foto
const integrantes = [
  {
    nome: "Thiago dos Santos Cordeiro",
    foto: "/integrantes/Thiago.jpg",
    descricao: "Responsável pela arquitetura do projeto e qualidade na entrega.",
  },
  {
    nome: "Jessé Marques Mateus",
    foto: "/integrantes/jesseM-2.jpeg",
    descricao: "Desenvolvedor do sistema, integrações com IA meta e banco de dados, criação de dashs.",
  },
  {
    nome: "Lucas Gomes Tambasco",
    foto: "/integrantes/lucasT-1.png",
    descricao:
      "Foi um dos responsáveis pelo desenvolvimento da interface de usuário, criando e implementando componentes interativos para garantir uma experiência de usuário fluida e intuitiva.",
  },
  {
    nome: "Jean Giusepe Silva Macedo",
    foto: "/integrantes/Jean.jpg",
    descricao: ".",
  },
  {
    nome: "Adrion Agniver Da Silva Jorge",
    foto: "/images/user-icon.png",
    descricao: ".",
  },
];

export default function SobreProjeto() {
  const [isOpen, setIsOpen] = useState(true); // window.innerWidth > 768
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <div className={styles.container}>
        <MenuBar isOpen={isOpen} />
        <main className={styles.main}>
          <section className={styles.text}>
            <h1 className={styles.h1}>Sobre o Projeto</h1>
            <p>
              A Ideia do projeto é ter um sistema funcional onde os chamados atendidos no dia são carregador numa base integrada e assim conseguimos ter um histórico e acompanhar as métricas de atendimento da empresa.
            </p>
            <p>
              Pensando nisso criamos uma solução IATECH. Inteligencia artificial para ajudar o Atendente a ter mais assertividade e agilidade nas respostas dos chamados.
            </p>
            <p>
              Temos a intenção de evoluir nosso sistema criando mais interação com o atendente/Usuário, permitindo abrir chamados e criar regras de acordo com a necessidade de negócio.
            </p>
          </section>
          <section>
            <h1 className={styles.h1}>Integrantes</h1>
            <div className="container my-4">
              <div className={styles.containerCards}>
                {integrantes.map((integrante, index) => (
                  <div className={`${styles.card}  `} key={index}>
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
                          <i
                            className={`bi ${
                              expandedIndex === index
                                ? "bi-chevron-up"
                                : "bi-chevron-down"
                            }`}
                          ></i>
                        </button>

                        {expandedIndex === index && (
                          <div className="mt-3" id={`collapseText-${index}`}>
                            <p className={styles.p}>{integrante.descricao}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
