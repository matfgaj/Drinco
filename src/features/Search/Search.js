import React, { useRef } from "react";
import styles from "./Search.module.css";
import SearchList from "../SearchList/SearchList";

import { connect } from "react-redux";
import actions from "../../app/drinks/duck/actions";

const Search = (props) => {
  const searchInput = useRef();

  const DrinkInput = (event, dispatch) => {
    event.preventDefault();

    const search = searchInput.current.value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((json) => props.fetchDrinkSearch(json));

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={DrinkInput} action="">
        <input ref={searchInput} type="text" placeholder="drink name" />
        <button type="submit">Search</button>
        <SearchList></SearchList>
      </form>
      <ul>{}</ul>
    </>
  );
};

const MapDispatchToProps = (dispatch) => ({
  fetchDrinkSearch: (drink) => dispatch(actions.fetchDrinkSearch(drink)),
});

export default connect(null, MapDispatchToProps)(Search);
