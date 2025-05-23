import { PropsWithChildren } from "react";

export interface IChatFormProps extends PropsWithChildren {
  onSendCallback?: () => void
}
