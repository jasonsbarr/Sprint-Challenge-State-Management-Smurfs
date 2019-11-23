import React, { useState } from "react";

const SmurfForm = ({ onSubmitSmurf }) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });
  const handleFieldChange = event => {
    setSmurf({
      ...smurf,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitSmurf}>
        <label htmlFor="name">
          Name:{" "}
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Smurf name"
            value={smurf.name}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="age">
          Age:{" "}
          <input
            name="age"
            id="age"
            type="text"
            placeholder="Smurf age"
            value={smurf.age}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="height">
          Height:{" "}
          <input
            name="height"
            id="height"
            type="text"
            placeholder="Smurf height"
            value={smurf.height}
            onChange={handleFieldChange}
          />
        </label>
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;
