import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers/reducer";

const store = createStore(allReducers, applyMiddleware(
  thunk
));

export default store;