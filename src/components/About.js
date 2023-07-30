import React, { useState } from "react";
import "./About.css";
const About = () => {
  const [values, setValues] = useState(0);

  const addOne = () => {
    setValues((prevValue) => prevValue + 1);
    console.log(`The current value is ${values + 1}`);
  };

  return (
    <div className="hero">
      <div className="card">
        <h1>About</h1>

        <button onClick={addOne}>{values}</button>
      </div>
    </div>
  );
};

export default About;
