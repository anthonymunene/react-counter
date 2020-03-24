import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState([]);

  const incrementCount = increment => {
    setCount(count + increment);
  };
  const decrementCount = decrement => {
    setCount(count - decrement);
  };
  const saveResults = () => {
    const newResult = [...result, count]
    setResult(newResult)
  }
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className="row">
          <Button increment={1} onClickFunction={incrementCount} />
          <Button increment={10} onClickFunction={incrementCount} />
          <Button increment={100} onClickFunction={incrementCount} />
          <Button increment={1000} onClickFunction={incrementCount} />
          <span>{count}</span>
          <button onClick={resetCount}>Reset</button>
          <button onClick={saveResults}>Save</button>
        </div>
        <div className="row">
          <Button decrement={1} onClickFunction={decrementCount} />
          <Button decrement={10} onClickFunction={decrementCount} />
          <Button decrement={100} onClickFunction={decrementCount} />
          <Button decrement={1000} onClickFunction={decrementCount} />
        </div>
      </div>
    </div>
  );
}

export default App;
