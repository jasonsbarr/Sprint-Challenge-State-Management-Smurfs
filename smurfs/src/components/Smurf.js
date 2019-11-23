import React from "react";

const Smurf = ({ smurf: { age, height, id, name } }) => (
  <div id={`smurf-${id}`}>
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
