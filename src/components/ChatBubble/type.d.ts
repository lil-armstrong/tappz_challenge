import { IBlob, TBlobType } from "@/types";
import { PropsWithChildren } from "react";
import { IMessage } from "../ChatList/type";

export interface IProps extends PropsWithChildren {
  isSender?: boolean;
  message: IMessage;
}

export interface IBlobProps extends IBlob {
  type: TBlobType;
}
