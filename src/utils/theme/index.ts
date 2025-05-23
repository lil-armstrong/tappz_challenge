import { createTheme, virtualColor } from "@mantine/core";
import { fontMono, fontSans } from "@/utils/font";
import components from "./components";

export const theme = createTheme({
  fontFamily: fontSans.style.fontFamily,
  fontFamilyMonospace: fontMono.style.fontFamily,
  headings: {
    fontFamily: fontSans.style.fontFamily,
  },
  scale: 1,
  components,
  primaryColor: "blue",
  colors: {
    primary: virtualColor({
      light: "red",
      dark: "green",
      name: "primary",
    }),
  },
});
