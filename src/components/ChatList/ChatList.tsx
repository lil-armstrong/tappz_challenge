import ChatBubble from "@/components/ChatBubble";
import { handleScrollToBottom } from "@/utils/api.lib";
import { ActionIcon } from "@mantine/core";
import { forwardRef } from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import classes from "./style.module.css";
import { IChatListProps } from "./type";
import EmptyList from "../EmptyList";

const ChatList = forwardRef<HTMLElement | null, IChatListProps>(
  ({ senderId, messages = [], showScrollBtn }, ref) => {
    return (
      <section ref={ref} className={classes.container}>
        {messages.length ? (
          messages.map((message, idx) => (
            <ChatBubble
              key={idx}
              message={message}
              isSender={message.senderId == senderId}
            />
          ))
        ) : (
          <EmptyList />
        )}

        {showScrollBtn && (
          <ActionIcon
            size="lg"
            variant="default"
            radius="md"
            onClick={() =>
              ref && "current" in ref && handleScrollToBottom(ref.current)
            }
            classNames={{
              root: classes.scroll_down,
            }}
          >
            <BiDownArrowAlt size={16} />
          </ActionIcon>
        )}
      </section>
    );
  }
);

ChatList.displayName = "ChatList";
export default ChatList;
