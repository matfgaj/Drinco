import types from "./types";

const initialDrinks = {
  searchedDrinks: "",
  displayedDrink: "",
  listName: "Favourite",
  Mydrinks: [
    { id: 0, name: "margerita" },
    { id: 1, name: "witchr" },
    { id: 2, name: "chockolemonapllejuice" },
  ],
};

function drinksReducer(state = initialDrinks, action) {
  switch (action.type) {
    case types.DRINKTODISPLAY:
      return {
        ...state,
        displayedDrink: action.drink,
      };
    case types.FETCHDRINKSEARCH:
      return {
        ...state,
        searchedDrinks: action.word,
      };
    case types.ADD:
      return {
        ...state,
        drinks: [...state.drinks, action.drink],
      };
    case types.RESET:
      return {
        ...state,
        drinks: [],
      };
    default:
      return state;
  }
}

export default drinksReducer;
