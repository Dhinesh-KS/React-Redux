import { combineReducers } from "redux";
import cakeReducer from "./cake/Reducer";
import iceCreamReducer from "./icecream/Reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
