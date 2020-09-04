import React from "react";
import { connect } from "react-redux";
import actions from "../../app/drinks/duck/actions";
import actionsDisplay from "../../app/displayedPage/duck/actions";
import "./DrinksList.css";

const DrinksList = (props) => {
  const HandleDeleteClick = (drink) => {
    props.remove(drink);
  };
  const HandleClick = (drink) => {
    props.drinkToDisplay(drink);
    props.setDisplay("Drink");
  };
  return (
    <ul>
      {props.Mydrinks.Mydrinks.map((drink) => {
        return (
          <li className="DrinkList__container" key={drink.idDrink}>
            <img src={drink.strDrinkThumb} alt="" />
            <p onClick={() => HandleClick(drink)}> {drink.strDrink}</p>
            <i
              onClick={() => HandleDeleteClick(drink)}
              className="fa fa-minus-circle"
            ></i>
          </li>
        );
      })}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  Mydrinks: state.drinks,
});
const MapDispatchToProps = (dispatch) => ({
  remove: (drink) => dispatch(actions.remove(drink)),
  drinkToDisplay: (drink) => dispatch(actions.drinkToDisplay(drink)),
  setDisplay: (drink) => dispatch(actionsDisplay.setDisplay(drink)),
});
export default connect(mapStateToProps, MapDispatchToProps)(DrinksList);
