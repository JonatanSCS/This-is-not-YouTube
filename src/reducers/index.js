import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";

import user from "./user";

export default function createReducer() {
  return combineReducers({
    user,
    routing: routerReducer
  });
}
