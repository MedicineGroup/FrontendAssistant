import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./store/auth-context.jsx";
import { UserDataProvider } from "./store/user-context.jsx";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <UserDataProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </UserDataProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
