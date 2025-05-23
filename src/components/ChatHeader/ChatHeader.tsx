import { useChatStore } from "@/store/useChatStore";
import { Avatar, Switch, Text } from "@mantine/core";
import classes from "./style.module.css";
import ThemeToggle from "../ThemeToggle";

const ChatHeader = () => {
  const switchUserId = useChatStore((state) => state.switchUserId);

  return (
    <section className={classes.container}>
      <div className={classes.profile_info}>
        <Avatar size="md" />

        <div className={classes.info}>
          <Text className="username" size="md">
            John Doe
          </Text>
          <Text className="last_seen" opacity={0.5} size="xs">
            Last seen: Yesterday
          </Text>
        </div>
      </div>

      <div className={classes.switch_container}>
        <ThemeToggle />
        <Switch label="Switch to recipient" onChange={switchUserId} />
      </div>
    </section>
  );
};

export default ChatHeader;
