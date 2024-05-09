import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";


ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="169744325886-r7uo0366jnjiji1llu3eufjoantk19ej.apps.googleusercontent.com">
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
