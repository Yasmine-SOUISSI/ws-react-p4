import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/Home";

function App() {
  const [counter, setCounter] = useState(0);
  // increment the counter by one : update the state
  const increment = () => {
    setCounter(counter + 1);
  };
  // decrement the counter by one : update the state
  const decrement = () => {
    if (counter > 0) {
      // setCounter is a function that takes the new value of the state 
      setCounter(counter - 1);
    }
  };
  return (
    <>
      {/* <button onClick={increment}F>Increment</button>
      <h1>Counter: {counter}</h1>
      <button onClick={decrement}>Decrement</button> */}

      <HomePage />
    </>
  );
}

export default App;
