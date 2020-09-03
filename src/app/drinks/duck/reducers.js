import types from "./types";
import MyDrinks from "./MyDrinks";

const initialDrinks = {
  searchedDrinks: "",
  displayedDrink: "",
  listName: "Favourite",
  Mydrinks: MyDrinks,
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
        Mydrinks: [...state.Mydrinks, action.drink],
      };
    case types.REMOVE:
      return {
        ...state,
        Mydrinks: state.Mydrinks.filter((item) => action.drink !== item),
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
