import { IBlob, TBlobType } from "@/types";

export interface IMessage {
    text: string
    senderId: string
    timestamp: string
    type: TBlobType
    blob?: IBlob
}

export interface IChatListProps {
    senderId: string,
    messages: IMessage[],
    showScrollBtn?: boolean
}