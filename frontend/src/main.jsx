import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ActivePageContextProvider } from "./context/ActivePageContext.jsx";
import { TypeRecordContextProvider } from "./context/TypeRecordContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TypeRecordContextProvider>
      <ActivePageContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ActivePageContextProvider>
    </TypeRecordContextProvider>
  </React.StrictMode>
);
