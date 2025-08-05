import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CompanyProvider } from "./context/CompanyContext";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    <CompanyProvider>
      {" "}
      {/* <StrictMode> */}
      <App />
      {/* </StrictMode> */}
    </CompanyProvider>
  </BrowserRouter>
);
