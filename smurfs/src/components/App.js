import React, { useEffect, useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import { SET_SMURFS } from "../actions/smurfs";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

const App = () => {
  const url = "http://localhost:3333/smurfs";
  const [state, dispatch] = useContext(SmurfContext);

  const handleSubmitSmurf = event => {
    event.preventDefault();

    const smurf = {
      name: event.target.name.value,
      age: Number(event.target.age.value),
      height: event.target.height.value
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(smurf),
      headers: {
        "Content-Type": "application/json"
      }
    }).catch(err => console.error(err));
  };

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: SET_SMURFS, payload: data }));
  }, []); // eslint-disable-line

  return (
    <div className="App">
      <h1>SMURFS! 2.0</h1>
      <SmurfForm onSubmitSmurf={handleSubmitSmurf} />
      {state.smurfs && state.smurfs.length ? (
        state.smurfs.map(smurf => (
          <Smurf key={`smurf-${smurf.id}`} smurf={smurf} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
