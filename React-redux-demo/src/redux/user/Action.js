import { FETCH_USER_LOADING, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./ActionTypes";
import axios from "axios";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const makeRequest = () => {
  return {
    type: FETCH_USER_LOADING,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export { makeRequest, fetchUserSuccess, fetchUserFailure };
