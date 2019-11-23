import { makeReducer, setState } from "../utils";

const setSmurfs = setState("smurfs");

const SET_SMURFS = (state, { payload: smurfs }) => {
  const newSmurfs = [...state.smurfs, ...smurfs];
  return setSmurfs(state, newSmurfs);
};

const ADD_SMURF = (state, { payload: smurf }) => {
  const smurfs = [...state.smurfs, smurf];
  return setSmurfs(state, smurfs);
};

export default makeReducer(
  {
    SET_SMURFS,
    ADD_SMURF
  },
  { smurfs: [] }
);
