import * as types from "./actionTypes";
import { GetData, RemoveData, Setdata } from "../../utils/localStorage";

const initState = {
  isLoading: false,
  token: null,
  isError: false,
  isAuth: GetData("Jio Mart User") || null,
};



const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_AUTH_REQUEST:
      return { ...state, isLoading: true, isAuth: false };
    case types.GET_AUTH_SUCCESS:
      Setdata("Jio Mart User", payload.firstName);
      return { ...state, isLoading: false, token: payload, isAuth: true };
    case types.GET_AUTH_FAILURE:
      return { ...state, isError: true, isAuth: false };
    case types.GET_AUTH_LOGOUT:
      return { ...state, isAuth: false, token: null };
    default:
      return state;
  }
};
export { reducer };
