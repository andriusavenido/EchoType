import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ActivePageContextProvider } from "./context/ActivePageContext.jsx";
import { TypeRecordContextProvider } from "./context/TypeRecordContext.jsx";
import { ForumFieldContext, ForumFieldContextProvider } from "./context/ForumFieldContext.jsx";
import { OptionsContextProvider } from "./context/OptionsContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ForumFieldContextProvider>
    <TypeRecordContextProvider>
      <ActivePageContextProvider>
        <AuthContextProvider>
          <OptionsContextProvider>
            <App />
          </OptionsContextProvider>
        </AuthContextProvider>
      </ActivePageContextProvider>
    </TypeRecordContextProvider>
    </ForumFieldContextProvider>
  </React.StrictMode>
);
