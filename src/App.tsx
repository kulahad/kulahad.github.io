import React from "react";
import logo from "./dev.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to <code>Mohammed Muqtadir Ahad's</code> portfolio.
      </p>
      <p style={{ marginTop: 0 }}>
        Other goodies would be added soon. Hang tight!
      </p>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/muqtadir-ahad/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ marginRight: ".5rem" }}
            alt="LinkedIn"
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
          />
        </a>
        <a href="https://github.com/kulahad/" target="_blank" rel="noreferrer">
          <img
            alt="github"
            src="https://img.icons8.com/fluent/48/000000/github.png"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
