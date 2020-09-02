import types from "./types";

const drinkToDisplay = (drink) => ({
  type: types.DRINKTODISPLAY,
  drink,
});

const fetchDrinkSearch = (word) => ({
  type: types.FETCHDRINKSEARCH,
  word,
});

const add = (drink) => ({
  type: types.ADD,
  drink,
});
const remove = (drink) => ({
  type: types.REMOVE,
  drink,
});

const reset = (item) => ({
  type: types.RESET,
  item,
});

export default { add, remove, reset, fetchDrinkSearch, drinkToDisplay };
