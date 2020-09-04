import React from "react";
import Search from "./features/Search/Search";
import DrinksList from "./features/DrinksList/DrinksList";
import AppHeader from "./features/AppHeader/AppHeader";
import DisplayDrink from "./features/DisplayDrink/DisplayDrink";

import "./App.css";
import { connect } from "react-redux";



function App(props) {

	
  return (
    <div className="App">
      <div className="Wraper">
          <AppHeader></AppHeader>
          {props.DisplayedPage.DisplayedPage === "Search" && <Search></Search>}
          {props.DisplayedPage.DisplayedPage === "List" && (
            <DrinksList></DrinksList>
          )}
          {props.DisplayedPage.DisplayedPage === "Drink" && (
            <DisplayDrink></DisplayDrink>
          )}
        </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  DisplayedPage: state.display,
});

export default connect(mapStateToProps, {})(App);
