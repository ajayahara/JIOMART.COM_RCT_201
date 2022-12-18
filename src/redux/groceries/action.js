import * as types from "./actionTypes";

const getGroceriesRequest = () => {
  return { type: types.GET_GROCERIES_REQUEST };
};

const getGrocerriesSuccess = (payload) => {
  return { type: types.GET_GROCERIES_SUCCESS, payload };
};

const getGrocerriesFailure = () => {
  return { type: types.GET_GROCERIES_ERROR };
};

export { getGroceriesRequest, getGrocerriesFailure, getGrocerriesSuccess };
