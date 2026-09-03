import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import App from "./App";
import { UserProvider } from "./context/UserContext";

const app = React.createElement(
  UserProvider,
  null,
  React.createElement(App)
);

ReactDOM.createRoot(
  document.getElementById("app")
).render(app);