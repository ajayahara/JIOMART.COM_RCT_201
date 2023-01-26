import { reducer as BeverageReducer } from "./beverage/reducer";
import { reducer as ElectronicsReducer } from "./electronics/reducer";
import { reducer as GroceriesReducer } from "./groceries/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
import {reducer as CartReducer} from "./Cart/reducer"
import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
  BeverageReducer,
  ElectronicsReducer,
  GroceriesReducer,
  AuthReducer,
  CartReducer
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
