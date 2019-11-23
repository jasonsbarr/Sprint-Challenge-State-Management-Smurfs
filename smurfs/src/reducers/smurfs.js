import { makeReducer, setState } from "../utils";

const SET_SMURFS = (state, { payload: smurfs }) => {
  const newSmurfs = [...state.smurfs, ...smurfs];
  return setState(newSmurfs);
};

const ADD_SMURF = (state, { payload: smurf }) => {
  const smurfs = [...state.smurfs, smurf];
  return setState(smurfs);
};

export default makeReducer(
  {
    SET_SMURFS,
    ADD_SMURF
  },
  { smurfs: [] }
);
