import { useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

function chatReducer(state, action) {
  switch (action.type) {
    case "update-assistant-response":
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.chatId]: action.payload.chatToUpdate,
        },
        isLoading: false,
      };
    case "update-assistant-response-error":
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.chatId]: {
            ...state.chats[action.payload.chatId],
            messages: [
              ...(state.chats[action.payload.chatId]?.messages || []),
              {
                role: "assistant",
                content:
                  "Ocorreu um erro ao comunicar com o sevidor. Por favor verifique sua chave e tente novamente",
              },
            ],
          },
        },
        isLoading: true,
      };
    case "add-user-message":
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.chatId]: {
            ...state.chats[action.payload.chatId],
            messages: [
              ...(state.chats[action.payload.chatId]?.messages || []),
              { role: "user", content: action.payload.message },
            ],
          },
        },
        isLoading: true,
      };
    case "selected-chat":
      return { ...state, selectedChat: action.payload.chatId };
    case "delete-chat":
      const newChats = structuredClone(state.chats);
      delete newChats[action.payload.chatId];

      const newSelectedChat =
        state.selectedChat === action.payload.chatId
          ? Object.keys(newChats)[0]
          : state.selectedChat;

      return {
        ...state,
        chats: newChats,
        selectedChat: newSelectedChat,
      };
  }
}

function generateInitialState() {
  const chatsFromLocalStorage = JSON.parse(
    localStorage.getItem("chats") || "{}"
  );

  const id = uuid();
  return {
    chats: {
      [id]: { title: "Nova conversa", messages: [] },
      ...chatsFromLocalStorage,
    },
    isLoading: false,
    selectedChat: id,
  };
}

export function useChat(openAiKey) {
  const [state, dispatch] = useReducer(chatReducer, {}, generateInitialState);

  function addUserMessage(chatId, message) {
    dispatch({ type: "add-user-message", payload: { chatId, message } });
  }

  function selectChat(chatId) {
    dispatch({ type: "selected-chat", payload: { chatId } });
  }
  function deleteChat(chatId) {
    dispatch({ type: "delete-chat", payload: { chatId } });
  }

  const selectedChatMessageCount =
    state.chats[state.selectedChat].messages.length;

  const lastMessageSender =
    state.chats[state.selectedChat].messages[selectedChatMessageCount - 1]
      ?.role;

  useEffect(() => {
    async function getOpenAiResponse() {
      try {
        const { data: chat } = await axios.post("/api/bot", {
          key: openAiKey,
          chat: state.chats[state.selectedChat],
        });
        dispatch({
          type: "update-assistant-response",
          payload: {
            chatId: state.selectedChat,
            chatToUpdate: chat,
          },
        });
      } catch (error) {
        dispatch({
          type: "update-assistant-response-error",
          payload: { chatId: state.selectedChat },
        });
      }
    }

    if (
      !!openAiKey &&
      selectedChatMessageCount > 0 &&
      lastMessageSender === "user"
    ) {
      getOpenAiResponse();
    }
  }, [
    openAiKey,
    selectedChatMessageCount,
    lastMessageSender,
    state.chats,
    state.selectedChat,
  ]);

  useEffect(() => {
    const chatsToIgnore = Object.keys(state.chats).filter(
      (chatIndex) =>
        state.chats[chatIndex].messages.length < 2 &&
        state.chats[chatIndex].title === "Nova conversa"
    );

    const chatsToSave = structuredClone(state.chats);

    chatsToIgnore.forEach((chatIndex) => {
      delete chatsToSave[chatIndex];
    });

    localStorage.setItem("chats", JSON.stringify(chatsToSave));
  }, [state.chats]);

  return {
    chats: state.chats,
    isLoading: state.isLoading,
    selectedChat: state.selectedChat,
    addUserMessage,
    selectChat,
    deleteChat,
  };
}
