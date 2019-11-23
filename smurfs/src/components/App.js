import React, { useEffect, useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import { SET_SMURFS } from "../actions/smurfs";
import Smurf from "./Smurf";

const App = () => {
  const [state, dispatch] = useContext(SmurfContext);

  useEffect(() => {
    fetch("http://localhost:3333/smurfs")
      .then(res => res.json())
      .then(data => dispatch({ type: SET_SMURFS, payload: data }));
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0</h1>
      {state.smurfs && state.smurfs.length ? (
        state.smurfs.map(smurf => (
          <Smurf key={`smurf-${smurf.id}`} smurf={smurf} />
        ))
      ) : (
        <div>No Smurfs found!</div>
      )}
    </div>
  );
};

export default App;
