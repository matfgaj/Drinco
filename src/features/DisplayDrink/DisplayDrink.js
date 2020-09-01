import React from "react";
import IngridientsList from "../IngridientsList/IngridientsList";

import { connect } from "react-redux";

const DisplayDrink = (props) => {
  const drink = props.displayedDrink.displayedDrink;

  return (
    <div className="DisplayDrink__container">
      <img src={drink.strDrinkThumb} alt="" className="DisplayDrink__img" />
      <i class="fa fa-star headerIcon"></i>
      <div className="DisplayDrink__alkoholic">
        Alcoholic:{drink.strAlkoholic === "Alkoholic" ? " yes" : " no"}
      </div>

      <div className="DisplayDrink__name">{drink.strDrink}</div>
      <div className="DisplayDrink__glass">{drink.strGlass}</div>
      <div className="DisplayDrink__ingridients">
        <IngridientsList Drink={drink}></IngridientsList>
      </div>
      <div className="DisplayDrink__instruction">{drink.strInstructions}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  displayedDrink: state.drinks,
});

export default connect(mapStateToProps, {})(DisplayDrink);
