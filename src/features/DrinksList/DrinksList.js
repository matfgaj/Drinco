import React from "react";
import { connect } from "react-redux";

const DrinksList = (props) => (

	
  <ul>
    {props.Mydrinks.Mydrinks.map((drink) => {
      return <li key={drink.id}>{drink.name}</li>;
    })}
  </ul>
);
const mapStateToProps = (state) => ({
  Mydrinks: state.drinks,
});

export default connect(mapStateToProps, {})(DrinksList);
