export const ADD_MESSAGE_COUNT = '@@chat/ADD_MESSAGE_COUNT'; //TODO Что именно дает синтаксис @@
export const ADD_CHAT = '@@chat/ADD_CHAT';
export const BLINK_CHAT = '@@chat/BLINK_CHAT';
export const DEL_CHAT = '@@chat/DEL_CHAT';
export const SET_CURRENT_CHAT = '@@chat/SET_CURRENT_CHAT';

export const addMsgCount = (chatId) => ({
  type: ADD_MESSAGE_COUNT,
  chatId,
});

export const addChat = (title) => ({
  type: ADD_CHAT,
  title,
});

export const delChat = (chatId) => ({
  type: DEL_CHAT,
  chatId,
});

export const blinkChat = (chatId) => ({
  type: BLINK_CHAT,
  chatId,
});

export const setCurrentChatId = (chatId) => ({
  type: SET_CURRENT_CHAT,
  chatId,
});
