import React from "react";
import ReactDOM from "react-dom/client";

// procura o <div id="root"></div> no index.html
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("ERRO: não existe <div id='root'></div> no index.html");
}

// renderização direta (sem App, sem imports externos)
ReactDOM.createRoot(rootElement).render(
  <div
    style={{
      padding: "20px",
      fontSize: "20px",
      color: "black",
      fontFamily: "Arial, sans-serif",
    }}
  >
    ✅ React está funcionando no Google AI Studio
  </div>
);