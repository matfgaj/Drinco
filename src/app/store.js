import { configureStore, createStore } from "@reduxjs/toolkit";
import drinks from "./drinks/duck/reducers";
import display from "./displayedPage/duck/reducers";


export default configureStore({
  reducer: {
    drinks: drinks,
    display: display,
  },
});
