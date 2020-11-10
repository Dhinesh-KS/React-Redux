import { FETCH_USER_LOADING, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./ActionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
