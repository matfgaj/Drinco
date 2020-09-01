import types from "./types";

const initialDisplay = {
  DisplayedPage: "Search",
};

function displayReducers(state = initialDisplay, action) {
  switch (action.type) {
    case types.SETDISPLAY:
      return {
        ...state,
        DisplayedPage: action.word,
      };

    default:
      return state;
  }
}

export default displayReducers;
