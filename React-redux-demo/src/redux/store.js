import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import RootReducer from "../redux/rootreducer";

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
