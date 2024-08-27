"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./MenuBar.module.scss";
import Link from "next/link";

export default function MenuBar({ isOpen }) {
  return (
    <>
      {isOpen && (
        <>
          <nav className={styles.nav}>
            <Link className={styles.link} href={"/"}>
              Home
            </Link>
            <Link className={styles.link} href={"/sobre"}>
              Sobre o Projeto
            </Link>
            <hr />
            <Link className={styles.link} href={"/chats"}>
              Chat
            </Link>
            <Link className={styles.link} href={"/chamados"}>
              Chamados
            </Link>
            <Link className={styles.link} href={"/dashboard"}>
              Dashboard
            </Link>
          </nav>
        </>
      )}
    </>
  );
}
