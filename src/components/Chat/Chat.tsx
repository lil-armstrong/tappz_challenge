"use client";

import ChatForm from "@/components/ChatForm";
import ChatHeader from "@/components/ChatHeader";
import ChatList from "@/components/ChatList";
import { useChatStore } from "@/store/useChatStore";
import classes from "./style.module.css";
import { firstUserId } from "@/constant/api.constant";
import { useEffect, useRef, useState } from "react";
import { handleScrollToBottom, isScrolledToMaxHeight } from "@/utils/api.lib";

const Chat = () => {
  const userId = firstUserId;
  const listSectionRef = useRef<HTMLElement>(null);
  const messages = useChatStore((state) => state.messages);
  const [canShowScrollBtn, setCanShowScrollBtn] = useState(false);

  useEffect(() => {
    if (listSectionRef.current) {
      const ref = listSectionRef.current;
      const handleScroll = () => {
        setCanShowScrollBtn(!isScrolledToMaxHeight(ref));
      };

      ref.addEventListener("scroll", handleScroll);

      return () => {
        ref.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={classes.container}>
      <ChatHeader />
      <ChatList
        senderId={userId}
        messages={messages}
        ref={listSectionRef}
        showScrollBtn={canShowScrollBtn}
      />
      <ChatForm
        onSendCallback={() => handleScrollToBottom(listSectionRef.current)}
      />
    </div>
  );
};
export default Chat;
