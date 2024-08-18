import Image from "next/image";
import { useState } from "react";
import styles from "./ChatInput.module.scss";

function ChatInput({ placeholder, onSubmitMessage }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmitMessage(inputValue);
      setInputValue("");
    }
  };

  function handleClick() {
    onSubmitMessage(inputValue);
    setInputValue("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />

        <div className={styles.button}>
          <button onClick={handleClick}>
            <Image
              alt="Icone de envia de mensagens"
              src={"/images/send-icon.svg"}
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
