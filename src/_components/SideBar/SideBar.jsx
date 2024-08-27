"use client";

// import { Chats } from "@/utils/use-chat";
import Image from "next/image";
import { useState } from "react";
import styles from "./SideBar.module.scss";

export default function SideBar({
  isVisible,
  selectedChat,
  selectChat,
  chats,
  deleteChat,
}) {
  const [isOpen, setIsOpen] = useState(false); // window.innerWidth > 768

  function handleClick() {
    setIsOpen((e) => !e);
  }

  function handleChatClick(chatIndex) {
    selectChat(chatIndex);
  }

  function handleDeleteClick(ev, chatIndex) {
    ev.stopPropagation();
    deleteChat(chatIndex);
  }
  return (
    <>
      {isOpen ? (
        <>
          <nav className={styles.nav}>
            <div className={styles.titleMain}>
              <h3 className={styles.h3}>Lista de conversas</h3>
              <button onClick={handleClick} className={styles.open}>
                <Image
                  width={25}
                  height={16}
                  alt="abrir barra"
                  src={"/images/open-menu.svg"}
                />
              </button>
            </div>
            <div className={styles.lista}>
              {Object.keys(chats).map((chatIndex) => (
                <div
                  key={chatIndex}
                  onClick={() => handleChatClick(chatIndex)}
                  className={styles.selectedChat}
                >
                  <div className={styles.item}>
                    <Image
                      alt=""
                      src={"/images/balloon.svg"}
                      width={17}
                      height={18}
                    />
                    <span className={styles.title}>
                      {chats[chatIndex].title}
                    </span>
                  </div>
                  <button
                    className={styles.trash}
                    disabled={Object.keys(chats).length === 1}
                    onClick={(ev) => handleDeleteClick(ev, chatIndex)}
                  >
                    <Image
                      alt=""
                      src={"/images/trash.svg"}
                      width={13}
                      height={18}
                    />
                  </button>
                </div>
              ))}
            </div>
          </nav>
        </>
      ) : (
        <button onClick={handleClick} className={styles.mainButton}>
          <Image
            width={25}
            height={16}
            alt="abrir barra"
            src={"/images/open-menu.svg"}
          />
        </button>
      )}
    </>
  );
}
