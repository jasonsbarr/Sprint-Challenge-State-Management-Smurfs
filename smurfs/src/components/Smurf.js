import React from "react";
import "./Smurf.css";

const Smurf = ({ smurf: { age, height, id, name } }) => (
  <div id={`smurf-${id}`} className="smurf">
    <p>
      <span>Name:</span> {name}
    </p>
    <p>
      <span>Age:</span> {age}
    </p>
    <p>
      <span>Height:</span> {height}
    </p>
  </div>
);

export default Smurf;
