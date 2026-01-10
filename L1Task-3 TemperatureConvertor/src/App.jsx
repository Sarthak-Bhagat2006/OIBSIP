import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [type, setType] = useState("Fahrenheit");
  const [input, setInput] = useState("");

  const handleConvert = () => {
    let value = parseFloat(input);

    if (isNaN(value)) {
      setResult("Invalid Input");
      return;
    }

    if (type == "Fahrenheit") {
      setResult(((value - 32) * 5) / 9);
    } else {
      setResult(value - 273.15);
    }
  };

  return (
    <>
      <h1>Temperature convertor</h1>
      <div className="card">
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="value" className="form-label">
              Degrees
            </label>
            <input
              type="number"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="mb-3 col-6">
            <label for="disabledTextInput" className="form-label">
              Type
            </label>
            <select
              id="disabledSelect"
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Fahrenheit</option>
              <option>Kelvin</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Result in Celcius
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            disabled="disabled"
            value={result}
          />
        </div>
        <button onClick={handleConvert}>Convert</button>
        {console.log(result)}
      </div>
    </>
  );
}

export default App;
