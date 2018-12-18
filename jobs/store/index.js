import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const INITIAL_STATE = {};
const store = createStore(
  reducers,
  INITIAL_STATE,
  compose(applyMiddleware(thunk))
);

export default store;
