import {legacy_createStore} from "redux"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { reducer } from "./reducer";
export const store=legacy_createStore(reducer,applyMiddleware(thunk));
