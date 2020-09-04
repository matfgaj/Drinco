import React, { useRef } from "react";
import "./Search.css";
import SearchList from "../SearchList/SearchList";

import { connect } from "react-redux";
import actions from "../../app/drinks/duck/actions";
import displayActions from "../../app/displayedPage/duck/actions";
const Search = (props) => {
  const searchInput = useRef();

  const DrinkInput = (event) => {
    event.preventDefault();

    const search = searchInput.current.value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((json) => props.fetchDrinkSearch(json));

    event.target.reset();
  };

  const HandleRandomDrinkClick = (event) => {
    event.preventDefault();

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((json) => props.drinkToDisplay(json.drinks[0]));

    props.setDisplay("Drink");
  };

  return (
    <>
      <form className="Search__form" onSubmit={DrinkInput} action="">
        <div className="Search__textContainer">
          <input
            className="Search__input"
            ref={searchInput}
            type="text"
            placeholder="drink name"
          />
          <button className="Search__button" type="submit">
            Search
          </button>
          <button onClick={HandleRandomDrinkClick} className="Search__button">
            Random Drink *
          </button>
        </div>
        <SearchList></SearchList>
      </form>
    </>
  );
};

const MapDispatchToProps = (dispatch) => ({
  fetchDrinkSearch: (drink) => dispatch(actions.fetchDrinkSearch(drink)),
  drinkToDisplay: (drink) => dispatch(actions.drinkToDisplay(drink)),
  setDisplay: (drink) => dispatch(displayActions.setDisplay(drink)),
});

export default connect(null, MapDispatchToProps)(Search);
