import React from "react";
import { connect } from "react-redux";
import actions from "../../app/drinks/duck/actions";
import actionsDisplay from "../../app/displayedPage/duck/actions";

import "./SearchList.css";

const SearchList = (props) => {
  const HandleClick = (drink) => {
    props.drinkToDisplay(drink);
    props.setDisplay("Drink");
  };
  const drinksList = props.searchedDrinks.searchedDrinks.drinks;

  if (drinksList !== undefined && drinksList !== null) {
    let listItems = drinksList.map((drink) => (
      <div
        key={drink.idDrink}
        className="SearchList__element"
        onClick={() => HandleClick(drink)}
      >
        <img
          className="SearchList__img"
          src={drink.strDrinkThumb}
          alt="drinkphoto"
        />
        <li className="SearchList__name">{drink.strDrink}</li>
      </div>
    ));
    return <ul>{listItems}</ul>;
  } else {
    return <ul></ul>;
  }
};
const mapStateToProps = (state) => ({
  searchedDrinks: state.drinks,
});

const MapDispatchToProps = (dispatch) => ({
  drinkToDisplay: (drink) => dispatch(actions.drinkToDisplay(drink)),
  setDisplay: (drink) => dispatch(actionsDisplay.setDisplay(drink)),
});
export default connect(mapStateToProps, MapDispatchToProps)(SearchList);
