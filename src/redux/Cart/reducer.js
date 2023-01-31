import * as types from "./actionType";

const initialData = {
  cart: [],
  purchasedItems:[],
  coupon: false,
};
export const reducer = (oldState = initialData, action) => {
  let { type, payload } = action;
  console.log(type, action);
  let newArray = [];
  switch (type) {
    case types.ADD_TO_CART:
      return { ...oldState, cart: [...oldState.cart, { ...payload, qty: 1 }] };
    case types.DELETE_FROM_CART:
      newArray = [...oldState.cart];
      newArray = newArray.filter((el) => {
        return el.image !== payload;
      });
      return { ...oldState, cart: [...newArray] };
    case types.ADD_CART_ITEMS:
      newArray = [...oldState.cart];
      newArray = newArray.map((el) => {
        if (el.image === payload) {
          return { ...el, qty: el.qty + 1 };
        } else {
          return el;
        }
      });
      return { ...oldState, cart: [...newArray] };
    case types.REDUCE_CART_ITEMS:
      newArray = [...oldState.cart];
      newArray = newArray.map((el) => {
        if (el.image === payload) {
          return { ...el, qty: el.qty - 1 };
        } else {
          return el;
        }
      });
      return { ...oldState, cart: [...newArray] };
    case types.RESET_CART:
      return {...oldState, purchasedItems: [...oldState.cart],cart:[]};

    case types.APPLY_COUPON:
      return { ...oldState, coupon: true };
    default:
      return oldState;
  }
};

