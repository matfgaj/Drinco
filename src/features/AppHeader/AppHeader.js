import React from "react";
import { connect } from "react-redux";
import actions from "../../app/displayedPage/duck/actions";

import "./AppHeader.css";

const AppHeader = (props) => {
  const changeDisplay = (word) => {
    props.setDisplay(word);
  };

  return (
    <header className="appHeader">
      <div
        onClick={() => {
          changeDisplay("Search");
        }}
        className="divIcon appHeader__search"
      >
        <i className="fa fa-search headerIcon "></i>
      </div>
      <div
        onClick={() => {
          changeDisplay("List");
        }}
        className="divIcon appHeader__list"
      >
        <i className="fa fa-list headerIcon "></i>
      </div>
    </header>
  );
};

const MapDispatchToProps = (dispatch) => ({
  setDisplay: (word) => dispatch(actions.setDisplay(word)),
});

export default connect(null, MapDispatchToProps)(AppHeader);
