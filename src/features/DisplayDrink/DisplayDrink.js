import React from "react";
import IngridientsList from "../IngridientsList/IngridientsList";
import actions from "../../app/drinks/duck/actions";
import "./DisplayDrink.css";
import { connect } from "react-redux";

const DisplayDrink = (props) => {
  const drink = props.displayedDrink;
  const HandleFavDrink = (drink) => {
    let repeat = false;
    props.Mydrinks.forEach((element) => {
      if (element.idDrink === drink.idDrink) {
        repeat = true;
      }
    });
    !repeat && props.add(drink);
  };

  const already = (drink) => {
    let already = false;
    props.Mydrinks.forEach((element) => {
      if (element.idDrink === drink.idDrink) {
        return (already = true);
      }
    });
    return already
      ? "fa fa-star DisplayDrink__star gold"
      : "fa fa-star DisplayDrink__star white";
  };

  return (
    <div className="DisplayDrink__container">
      <img src={drink.strDrinkThumb} alt="" className="DisplayDrink__img" />
      <div className="DisplayDrink__name">{drink.strDrink}</div>
      <div className="DisplayDrink__textContainer">
        <i
          onClick={(event) => HandleFavDrink(drink)}
          className={already(drink)}
        ></i>
        <div className="DisplayDrink__alkoholic">
          Alcoholic only:{drink.strAlkoholic === "Alkoholic" ? " yes" : " no"}
        </div>
        <div className="DisplayDrink__glass">{drink.strGlass}</div>
        <div className="DisplayDrink__ingridients">
          <IngridientsList Drink={drink}></IngridientsList>
        </div>
        <div className="DisplayDrink__instruction">{drink.strInstructions}</div>
      </div>{" "}
    </div>
  );
};

const mapStateToProps = (state) => ({
  displayedDrink: state.drinks.displayedDrink,
  Mydrinks: state.drinks.Mydrinks,
});

const MapDispatchToProps = (dispatch) => ({
  add: (drink) => dispatch(actions.add(drink)),
});
export default connect(mapStateToProps, MapDispatchToProps)(DisplayDrink);
