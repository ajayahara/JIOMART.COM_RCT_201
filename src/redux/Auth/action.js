import * as types from "./actionTypes";

const getAuthRequest = () => {
  return { type: types.GET_AUTH_REQUEST };
};

const getAuthSuccess = (payload) => {
  return { type: types.GET_AUTH_SUCCESS, payload };
};

const getAuthError = () => {
  return { type: types.GET_AUTH_FAILURE };
};

const getAuthLogout = () => {
  return { type: types.GET_AUTH_LOGOUT };
};

export { getAuthError, getAuthRequest, getAuthSuccess };
