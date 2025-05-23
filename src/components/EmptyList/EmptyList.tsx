import { Text, Title } from "@mantine/core";
import classes from "./style.module.css";
import { BiChat } from "react-icons/bi";

const EmptyList = () => {
  return (
    <div data-testid="empty-list" className={classes.container}>
      <div>
        <BiChat fontSize={70} opacity={0.4} />
      </div>

      <Title order={3}>No messages yet</Title>
      <Text className={classes.description}>
        You have not sent any messages yet :(
      </Text>
    </div>
  );
};

export default EmptyList;
