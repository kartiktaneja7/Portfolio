import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Change this line - import from react-router-dom, not react-router
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./provider/page";
import "./index.css";
import App from "./App.jsx";

// Add a null check before creating root
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        /* Add the basename prop to match your GitHub repository name */
        <BrowserRouter basename="/Portfolio">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}