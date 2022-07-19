import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
