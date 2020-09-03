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

  const drinksList = props.searchedDrinks.drinks;

  const already = (drink) => {
    let already = false;
    props.Mydrinks.forEach((element) => {
      if (element.idDrink === drink.idDrink) {
        return (already = true);
      }
    });
    return already
      ? "fa fa-star SearchList__Icon"
      : "fa fa-minus SearchList__Icon";
  };

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
        <div className="SearchList__divIcon">
          <i className={already(drink)}></i>
        </div>
        <li className="SearchList__name">{drink.strDrink}</li>
      </div>
    ));
    return <ul>{listItems}</ul>;
  }
  if (drinksList === null) {
    return <ul>try again</ul>;
  }
  if (drinksList === undefined) {
    return <div></div>;
  }
};

const mapStateToProps = (state) => ({
  searchedDrinks: state.drinks.searchedDrinks,
  Mydrinks: state.drinks.Mydrinks,
});

const MapDispatchToProps = (dispatch) => ({
  drinkToDisplay: (drink) => dispatch(actions.drinkToDisplay(drink)),
  setDisplay: (drink) => dispatch(actionsDisplay.setDisplay(drink)),
});
export default connect(mapStateToProps, MapDispatchToProps)(SearchList);
