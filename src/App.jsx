import { useState } from "react";

import "./App.css";

function App() {
  const [ligado, setLigado] = useState("");

  return (
    <div className="app">
      <div className="container">
        <div
          onClick={() => setLigado("red")}
          className={`luz ${ligado === "red" ? "ligado" : ""}`}
          style={{ backgroundColor: "#f00" }}
        ></div>
        <div
          onClick={() => setLigado("yellow")}
          className={`luz ${ligado === "yellow" ? "ligado" : ""}`}
          style={{ backgroundColor: "#ff0" }}
        ></div>
        <div
          onClick={() => setLigado("green")}
          className={`luz ${ligado === "green" ? "ligado" : ""}`}
          style={{ backgroundColor: "#4DCB4D" }}
        ></div>
      </div>

      <button className="btn" onClick={() => setLigado("")}>
        Limpar
      </button>
    </div>
  );
}

export default App;
