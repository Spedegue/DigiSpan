import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import store from "@/store";

const theme = {
  color: {
    background: "#FFFFFF",
    onSurface: "#19293A",
    onBackground: "#19293A",
    primary: "#19293A",
    onPrimary: "#FFFFFF",
    primary50: "#19293A80",
    surface: "#EDEFF1",
    onBackgroundAlt: "#506473",
    disabled: "#50647380",
    secondary: "#C0345E",
    primaryAlt: "#112D40",
    greyAlt: "#596D7A",
    secondaryAlt: "#C34465",
    midGrey: "#A7B1B8",
    lightGrey: "#C5C9CD",
    subtleOnPrimary: "#344657",
    surfaceAlt: "#E2E4E6",
    subtleOnSurfaceAlt: "#C5CACE",
    midGreyAlt: "#9EA9B1",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
