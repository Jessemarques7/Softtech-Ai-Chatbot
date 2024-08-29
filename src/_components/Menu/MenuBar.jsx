"use client";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { LuFileSearch } from "react-icons/lu";
import styles from "./MenuBar.module.scss";
import Link from "next/link";

export default function MenuBar({ isOpen }) {
  return (
    <>
      {isOpen && (
        <>
          <nav className={styles.nav}>
            <Link className={styles.link} href={"/"}>
              <HiOutlineHome className={styles.icon} /> Home
            </Link>
            <Link className={styles.link} href={"/sobre"}>
              <LuFileSearch className={styles.icon} /> Sobre o Projeto
            </Link>
            <hr />
            <Link className={styles.link} href={"/chats"}>
              <IoChatboxEllipsesOutline className={styles.icon} /> Chat
            </Link>
            <Link className={styles.link} href={"/chamados"}>
              <BsFileEarmarkBarGraph className={styles.icon} /> Chamados
            </Link>
            <Link className={styles.link} href={"/dashboard"}>
              <VscGraph className={styles.icon} /> Dashboard
            </Link>
          </nav>
        </>
      )}
    </>
  );
}
