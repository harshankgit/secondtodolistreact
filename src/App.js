import React, { useState } from "react";
import "./App.css";
import Comp from "./Comp";

const App = () => {
  const [val, setval] = useState("");
  const [val1, setval1] = useState([]);

  const Chevent = (event) => {
    setval(event.target.value);
  };
  const ChangeVal = () => {
    setval1((oldval) => {
      return [...oldval, val];
    });

    setval("");
  };
  return (
    <React.Fragment>
      <div className="mainbox">
        <h1>TO DO List</h1>
        <input type="text" name="" id="" placeholder="Add Items" value={val} onChange={Chevent} />
        <button onClick={ChangeVal}>+</button>
        <div>
          <ol>
            {val1.map((cur, index) => {
              return <Comp text={cur} key={index} />
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
