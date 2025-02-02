import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./util/scroll-to-top.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>
    </BrowserRouter>
  </StrictMode>
);
