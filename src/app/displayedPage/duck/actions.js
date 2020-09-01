import types from "./types";

const setDisplay = (word) => ({
  type: types.SETDISPLAY,
  word,
});



export default { setDisplay };
