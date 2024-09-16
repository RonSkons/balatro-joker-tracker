import "./App.css";
import { useState } from "react";
import { SaveFileViewer } from "./SaveFileViewer";

function App() {
  const [state, setState] = useState(null);

  return (
    <div className="App">
      <header>
        <h2>Balatro Joker Tracker</h2>
        <label htmlFor="fileInput">Choose save file: </label>
        <input
          type="file"
          accept=".jkr"
          id="fileInput"
          onChange={(e) => {
            setState(e.target.files[0]);
          }}
        />
      </header>
      <div style={{ width: "100%" }}>
        {state && <><p style={{ color: "#ffffff" }} >Click a Joker to open wiki!</p><SaveFileViewer file={state} /></>}
      </div>
      <footer>
        <p>
          By{" "}
          <a
            href="https://github.com/RonSkons/balatro-joker-tracker"
            target="_blank"
            rel="noreferrer"
          >
            @RonSkons
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
