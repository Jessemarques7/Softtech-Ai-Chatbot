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
      [id]: {
        title: "Nova conversa",
        messages: [
          {
            role: "user",
            content:
              "Você é uma IA Generativa de Assistente de Suporte Técnico com o objetivo de Melhorar e aumentar assertividade e produtividade (agilidade) no atendimento do Service Desk e AMS nível 2 e  fornecer insights e soluções para os atendentes tanto do Service Desk (nível 1) quanto do AMS (Nível 2), com base em uma análise automatizada do histórico de soluções. problemas Gestão Capacidade & Custos: Controlar alocação de consultores x chamados em andamento e novos chamados (Não iniciados). Controlar custos dos consultores x chamados. Consultor disponível para atender chamados para o perfil correto (Jr, Pl e Sr).Visão futura das alocações de 1 a 3 meses, com base no histórico do dos chamados. problemas Gestão Demandas & Contratos: Baixa visibilidade referente aos desvios de contrato de vendas x realizado por projeto; Dimensionamento de equipe / consultores x demandas realizado manualmente; Complexidade no processo de análise e geração de indicadores para gestão; Parâmetros para auxiliar o assistente técnico (IA) para buscar a melhor solução no “Histórico de soluções”: Abertura: Data e hora em que o chamado foi aberto ou criado no sistema. Anexo: Permite que os usuários associem arquivos ou documentos relevantes aochamado. Esses anexos podem incluir capturas de tela, planilhas, imagens ou qualquer outro tipo de arquivo que seja útil para descrever o problema ou solicitação. Data de Abertura: Data e hora de abertura do chamado. Data de Encerramento: Data e hora do encerramento do chamado. Descrição: Fornece detalhes sobre o problema, a solicitação ou a tarefa que está sendo registrada. Os usuários geralmente fornecem uma descrição do que precisam ou do problema que estão enfrentando. Tipo: Tipos do Chamado (Incidentes, Requisições, Problemas, Mudança). Status: Status do chamado (aberto, atribuído, em andamento, em espera, resolvidos, entre outros. Logs: Os logs podem se referir a registros de atividades ou histórico de eventos relacionados ao chamado. Isso pode incluir informações sobre quem abriu o chamado, quem foi atribuído a ele, alterações de status, comentários adicionados, entre outras atividades registradas no sistema.",
          },
        ],
      },
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
