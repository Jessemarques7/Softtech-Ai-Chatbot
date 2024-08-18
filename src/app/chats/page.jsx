"use client";

import styles from "./page.module.scss";
import ChatInput from "@/_components/ChatInput/ChatInput";
import ChatMessages from "@/_components/ChatMessages/ChatMessages";
import Header from "@/_components/Header/Header";
import SideBar from "@/_components/SideBar/SideBar";
import { useChat } from "@/utils/use-chat";

const openAiKey = "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";

export default function Chats() {
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
    <>
      <Header />
      <div className={styles.container}>
        <SideBar
          isVisible={!!openAiKey}
          selectedChat={selectedChat}
          selectChat={selectChat}
          deleteChat={deleteChat}
          chats={chats}
        />

        <main className={styles.main}>
          <h1 className={styles.h1}>Softtek Ai</h1>
          <ChatMessages
            messages={chats[selectedChat].messages}
            isLoading={isLoading}
          />
          <ChatInput
            onSubmitMessage={handleChatSubmit}
            placeholder={placeholder}
          />
        </main>
      </div>
    </>
  );
}
