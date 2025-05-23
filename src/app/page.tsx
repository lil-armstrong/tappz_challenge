import Chat from "@/components/Chat";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div data-testid="home-container" className={classes.container}>
      <Chat />
    </div>
  );
}
