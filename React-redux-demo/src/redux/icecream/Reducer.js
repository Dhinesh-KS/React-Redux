import { BUY_ICECREAM } from "./ActionType";

const initialIcecreamState = {
  numOfIcecream: 10,
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - action.payload,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
