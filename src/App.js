import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#00ffff").all(2));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(2);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Generate a color!</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#00FFFF"
            className={`${error ? "error" : null}`}
          />
          <button className="btn">Generate</button>
        </form>
      </section>
      ;
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
