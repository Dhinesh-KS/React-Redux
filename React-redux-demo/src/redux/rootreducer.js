import { combineReducers } from "redux";
import cakeReducer from "./cake/Reducer";
import iceCreamReducer from "./icecream/Reducer";
import userReducer from "./user/Reducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
