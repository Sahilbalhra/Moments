import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <GoogleOAuthProvider
          clientId={process.env.CLIENT_ID || "GOOGLE_CLIENT_ID"}
        >
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
