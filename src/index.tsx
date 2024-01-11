import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyles";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./common/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
