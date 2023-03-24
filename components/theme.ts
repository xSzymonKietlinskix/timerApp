import { extendTheme } from "native-base";

const config = {
  useSytemColorMode: false,
  initialColorMode: "light",
};

const colors = {
  primary: {
    50: "#EEF2F6",
  },
};

const components = {
  Button: {
    // Can simply pass default props to change default behaviour of components.
    defaultProps: {
      bg: "blueGray.900",
      rounded: "md",
      size: "sm",
    },
  },
};

export default extendTheme({ config, colors, components });
