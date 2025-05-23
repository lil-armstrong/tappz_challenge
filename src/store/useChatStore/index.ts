"use client";

import { create } from "zustand";
import { IChatState } from "./type";
import { IMessage } from "@/components/ChatList/type";
import { TBlobType } from "@/types";
import { getFileDetails } from "@/utils/api.lib";
import { firstUserId, secondUserId } from "@/constant/api.constant";

export const useChatStore = create<IChatState>()((set) => ({
  userId: firstUserId,
  messages: [],
  addMessage: async ({ files, senderId, text }) => {
    const [type = "text", blob] = await getFileDetails(files);

    const newMessage: IMessage = {
      senderId,
      text,
      timestamp: new Date().toISOString(),
      type: type as TBlobType,
      blob,
    };
    set((state) => ({ messages: [...state.messages, newMessage] }));
  },
  switchUserId: () => {
    set((state) => ({
      userId: state.userId === firstUserId ? secondUserId : firstUserId,
    }));
  },
}));
