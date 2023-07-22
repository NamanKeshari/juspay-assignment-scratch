import { extendTheme } from "native-base";

export const nbTheme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        backgroundColor: "#4c97ff",
        _pressed: {
          backgroundColor: "#064fb4",
        },
      },
    },
  },
  colors: {
    primary: {
      "100": "#4c97ff",
      "200": "#fff",
      "300": "#bef4be",
      "400": "#59c059",
      "500": "#ff0000",
    },
  },
  config: {
    initialColorMode: "light",
  },
});
