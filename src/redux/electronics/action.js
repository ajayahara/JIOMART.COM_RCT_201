import * as types from "./actionTypes";

const getElectronicsRequest = () => {
  return { type: types.GET_ELECTRONICS_REQUEST };
};
const getElectronicsSuccess = (payload) => {
  return { type: types.GET_ELECTRONICS_SUCCESS ,payload};
};
const getElectronicsError = () => {
  return { type: types.GET_ELECTRONICS_ERROR };
};

export { getElectronicsError, getElectronicsRequest, getElectronicsSuccess };
