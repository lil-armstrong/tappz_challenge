import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { BiMoon, BiSun } from "react-icons/bi";
import classes from "./style.module.css";
import cx from "clsx";

function ThemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="transparent"
      size="md"
      aria-label="Toggle color scheme"
    >
      {colorScheme === "dark" ? (
        <BiSun className={cx(classes.icon)} fontSize={20} />
      ) : (
        <BiMoon className={cx(classes.icon)} fontSize={20} />
      )}
    </ActionIcon>
  );
}

export default ThemeToggle;
