import * as types from "./actionTypes";

const initState = {
  list: [],
  filterData: ["Phone", "Watch"],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ELECTRONICS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_ELECTRONICS_SUCCESS:
      return { ...state, isLoading: false, list: payload };
    case types.GET_ELECTRONICS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
