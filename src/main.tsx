import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CursoSerLuz from "./CursoSerLuz";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CursoSerLuz />
  </StrictMode>
);
