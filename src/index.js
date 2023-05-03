import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import { allThemes } from "helpers/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider theme={allThemes.light}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
