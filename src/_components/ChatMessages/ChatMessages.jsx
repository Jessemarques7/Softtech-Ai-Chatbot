import Image from "next/image";
import Markdown from "react-markdown";
import styles from "./ChatMessages.module.css";

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
      <div className={styles.message}>
        <Image
          alt={message.role}
          src={`/images/${message.role}-icon.png`}
          width={36}
          height={36}
          className="mr-4 self-start"
        />
        {isLoading ? (
          <Image
            src={"/images/loading.svg"}
            width={36}
            height={36}
            alt="whatever"
            className="mr-4"
          />
        ) : (
          <div className={styles.content}>
            <Markdown>{message.content}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
