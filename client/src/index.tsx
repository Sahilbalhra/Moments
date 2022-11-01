import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { apiSlice } from "./features/api/apiSlice";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
          <GoogleOAuthProvider
            clientId={process.env.CLIENT_ID || "GOOGLE_CLIENT_ID"}
          >
            <App />
          </GoogleOAuthProvider>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
