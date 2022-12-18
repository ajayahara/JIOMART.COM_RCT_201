import * as types from "./actionTypes";

const initState = {
  list: [],
  filterData: ["Tea", "Juice", "Cold Drink", "Powder"],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BEVERAGE_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_BEVERAGE_SUCCESS:
      return { ...state, isLoading: false, list: payload };
    case types.GET_BEVERAGE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
