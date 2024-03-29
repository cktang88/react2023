import { Link } from "react-router-dom";
import { useState } from "react";

// import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {

  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> | <Link to="/todos">Todos</Link>
      </nav>
      <br></br>
      <div>Welcome to the App main page.</div>
    </div>
  );
}

export default App;
