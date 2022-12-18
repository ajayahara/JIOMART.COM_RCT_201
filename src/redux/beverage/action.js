import * as types from "./actionTypes";

const getBeverageRequest = () => {
  return { type: types.GET_BEVERAGE_REQUEST };
};

const getBeverageSuccess = (payload) => {
  return { type: types.GET_BEVERAGE_SUCCESS, payload };
};

const getBeverageError = () => {
  return { type: types.GET_BEVERAGE_ERROR };
};

export { getBeverageError, getBeverageRequest, getBeverageSuccess };
