import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
);
