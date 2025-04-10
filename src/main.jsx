import React from "react"; // ✅ React should be imported like this
import { createRoot } from "react-dom/client"; // ✅ No need to import ReactDOM
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
