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
    descricao: "Descrição do que o integrante realizou no projeto.",
  },
  {
    nome: "Jessé Marques Mateus",
    foto: "/integrantes/jesseM-2.jpeg",
    descricao: "Descrição do que o integrante realizou no projeto.",
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
    descricao: "Descrição do que o integrante realizou no projeto.",
  },
  {
    nome: "Adrion Agniver Da Silva Jorge",
    foto: "/integrantes/",
    descricao: "Descrição do que o integrante realizou no projeto.",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolor minima laudantium soluta, obcaecati, ullam eius facere
              natus, cumque impedit illo pariatur numquam adipisci nihil
              assumenda commodi alias odit voluptatibus fuga optio hic
              doloremque quas excepturi! Harum molestiae blanditiis, assumenda,
              et, voluptate ratione laudantium natus ullam illum est corporis
              recusandae officiis nam porro! Quidem voluptatibus at architecto
              accusamus hic exercitationem. Ad iste dolorem molestias deserunt!
              Dolorum mollitia consectetur perspiciatis est voluptatum saepe
              quia unde reprehenderit vel accusamus libero, nemo magni nihil
              fuga ducimus iusto temporibus dolore vero odio at ab! Nulla sit
              voluptatem amet? Inventore earum facere nisi natus magnam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolor minima laudantium soluta, obcaecati, ullam eius facere
              natus, cumque impedit illo pariatur numquam adipisci nihil
              assumenda commodi alias odit voluptatibus fuga optio hic
              doloremque quas excepturi! Harum molestiae blanditiis, assumenda,
              et, voluptate ratione laudantium natus ullam illum est corporis
              recusandae officiis nam porro! Quidem voluptatibus at architecto
              accusamus hic exercitationem. Ad iste dolorem molestias deserunt!
              Dolorum mollitia consectetur perspiciatis est voluptatum saepe
              quia unde reprehenderit vel accusamus libero, nemo magni nihil
              fuga ducimus iusto temporibus dolore vero odio at ab! Nulla sit
              voluptatem amet? Inventore earum facere nisi natus magnam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolor minima laudantium soluta, obcaecati, ullam eius facere
              natus, cumque impedit illo pariatur numquam adipisci nihil
              assumenda commodi alias odit voluptatibus fuga optio hic
              doloremque quas excepturi! Harum molestiae blanditiis, assumenda,
              et, voluptate ratione laudantium natus ullam illum est corporis
              recusandae officiis nam porro! Quidem voluptatibus at architecto
              accusamus hic exercitationem. Ad iste dolorem molestias deserunt!
              Dolorum mollitia consectetur perspiciatis est voluptatum saepe
              quia unde reprehenderit vel accusamus libero, nemo magni nihil
              fuga ducimus iusto temporibus dolore vero odio at ab! Nulla sit
              voluptatem amet? Inventore earum facere nisi natus magnam.
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
