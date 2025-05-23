import { IMessage } from "@/components/ChatList/type";
import type { Task } from "@/types/task";

export interface IChatState {
  messages: IMessage[];
  addMessage: (message:{
    text: string,
    senderId : string,
    files: FileList | null
  }) => Promise<void>;
  switchUserId: () => void,
  userId: string
}
