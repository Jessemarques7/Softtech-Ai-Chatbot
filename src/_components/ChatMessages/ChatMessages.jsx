import Image from "next/image";
import Markdown from "react-markdown";
import styles from "./ChatMessages.module.scss";

export default function ChatMessages({ messages, isLoading }) {
  return (
    <div className={styles.messages}>
      {messages?.map((message, index) => (
        <MessageBLock key={index} message={message} />
      ))}
      {isLoading && (
        <MessageBLock message={{ role: "assistant", content: "" }} isLoading />
      )}
    </div>
  );
}

function MessageBLock({ message, isLoading = false }) {
  return (
    <div className={styles.messageBlock}>
      <div
        className={
          message.role === "user" ? styles.messageUser : styles.messageAssistant
        }
      >
        {message.role === "assistant" && (
          <Image
            alt={message.role}
            src={`/images/${message.role}-icon.png`}
            width={36}
            height={36}
            className={styles.logouser}
          />
        )}
        {isLoading ? (
          <Image
            src={"/images/loading.svg"}
            width={36}
            height={36}
            alt="whatever"
            className={styles.loading}
          />
        ) : (
          <div className={styles.content}>
            <Markdown>{message.content}</Markdown>
          </div>
        )}

        {message.role === "user" && (
          <Image
            alt={message.role}
            src={`/images/${message.role}-icon.png`}
            width={36}
            height={36}
            className={styles.logouser}
          />
        )}
      </div>
    </div>
  );
}
