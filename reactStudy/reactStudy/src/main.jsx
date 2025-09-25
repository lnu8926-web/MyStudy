import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Filter from "./ex1_state/ex08_filter";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Filter />
  </StrictMode>
);
