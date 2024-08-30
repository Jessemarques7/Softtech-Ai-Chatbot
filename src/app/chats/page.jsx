"use client";

import styles from "./page.module.scss";
import ChatInput from "@/_components/ChatInput/ChatInput";
import ChatMessages from "@/_components/ChatMessages/ChatMessages";
import Header from "@/_components/Header/Header";
import SideBar from "@/_components/SideBar/SideBar";
import { useChat } from "@/utils/use-chat";
import { useState } from "react";
import MenuBar from "../../_components/Menu/MenuBar";

const openAiKey = "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";

export default function Chats() {
  const [isOpen, setIsOpen] = useState(true); // window.innerWidth > 768

  const {
    chats,
    isLoading,
    selectedChat,
    addUserMessage,
    selectChat,
    deleteChat,
  } = useChat(openAiKey);

  const placeholder = "Digite um Oi";

  function handleSubmitMessage(message) {
    addUserMessage(selectedChat, message);
  }

  const handleChatSubmit = !!openAiKey ? handleSubmitMessage : setOpenAiKey;

  return (
    <div className={styles.page}>
      <Header setIsOpen={setIsOpen} />
      <div className={styles.container}>
        <MenuBar isOpen={isOpen} />
        <main className={styles.main}>
          <h1 className={styles.h1}>AI TECH</h1>
          <ChatMessages
            messages={chats[selectedChat].messages}
            isLoading={isLoading}
          />
          <ChatInput
            onSubmitMessage={handleChatSubmit}
            placeholder={placeholder}
          />
        </main>
        <SideBar
          selectedChat={selectedChat}
          selectChat={selectChat}
          deleteChat={deleteChat}
          chats={chats}
        />
      </div>
    </div>
  );
}
