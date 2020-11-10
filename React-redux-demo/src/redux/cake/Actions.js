import { BUY_CAKE, ADD_STOCK } from "./ActionTypes";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

export const addCake = (number = 10) => {
  return {
    type: ADD_STOCK,
    payload: number,
  };
};
