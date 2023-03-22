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

export default extendTheme({ config, colors });
