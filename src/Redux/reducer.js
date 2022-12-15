import * as types from './actionTypes';

const initialState ={
    isAuth: false,
    token: "",
    isAuthError: false,
    isAuthLoading: false,
}

const reducer = (oldState=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case types.USER_LOGIN_REQUEST:
        return {...oldState, isAuthLoading: true};
        case types.USER_LOGIN_SUCCESS:
            return {...oldState, isAuth: true, token: payload.token, isAuthLoading:false};
        case types.USER_LOGIN_ERROR:
            return {...oldState, isAuthError: true, isAuthLoading: false};
            default:
                return oldState;
    }

}

export default  reducer ;