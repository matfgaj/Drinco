import types from "./types";

const drinkToDisplay = (drink) => ({
  type: types.DRINKTODISPLAY,
  drink,
});

const fetchDrinkSearch = (word) => ({
  type: types.FETCHDRINKSEARCH,
  word,
});

const add = (item) => ({
  type: types.ADD,
  item,
});

const reset = (item) => ({
  type: types.RESET,
  item,
});

export default { add, reset, fetchDrinkSearch, drinkToDisplay };
