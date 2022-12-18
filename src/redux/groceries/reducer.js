import * as types from "./actionTypes";

const initState = {
  list: [],
  filterData: ["Dried/Powder", "Fresh"],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_GROCERIES_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_GROCERIES_SUCCESS:
      return { ...state, isLoading: false, list: payload };
    case types.GET_GROCERIES_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
