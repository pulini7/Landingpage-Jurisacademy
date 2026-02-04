import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("SEM #root no index.html");
}

ReactDOM.createRoot(rootElement).render(
  <div style={{ padding: 20, color: "black", fontSize: 20 }}>
    ✅ React carregou de verdade
  </div>
);