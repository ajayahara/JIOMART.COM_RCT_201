import * as types from "./actionTypes";

const initState = {
  isLoading: false,
  token: null,
  isError: false,
  isAuth: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_AUTH_REQUEST:
      return { ...state, isLoading: true, isAuth: false };
    case types.GET_AUTH_SUCCESS:
      return { ...state, isLoading: false, token: payload, isAuth: true };
    case types.GET_AUTH_FAILURE:
      return { ...state, isError: true, isAuth: false };
    default:
      return state;
  }
};
export { reducer };
