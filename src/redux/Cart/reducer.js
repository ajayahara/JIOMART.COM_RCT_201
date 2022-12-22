import * as types from "./actionType"

const initialData = {
    cart: [{}]
}
export const reducer = (oldState = initialData, action) => {
    let { type, payload } = action;
    switch (type) {
        case types.ADD_TO_CART:
            return { ...oldState, cart: [...oldState.cart, payload] }
        case types.DELETE_FROM_CART:
            let newArray = [...oldState.cart];
            newArray = newArray.filter((el) => {
                return el.id !== payload;
            })
            return { ...oldState, cart: [...newArray] }
            case types.ADD_CART_ITEMS:
                newArray=[...oldState.cart]
                newArray=newArray.map((el)=>{
                    if(el.id===payload){
                        return {...el,quantity:el.quantity+1}
                    }
                })
                return {...oldState,cart:[...newArray]}
                case types.REDUCE_CART_ITEMS:
                newArray=[...oldState.cart]
                newArray=newArray.map((el)=>{
                    if(el.id===payload){
                        return {...el,quantity:el.quantity-1}
                    }
                })
                return {...oldState,cart:[...newArray]}
        case types.RESET_CART:
            return initialData;
        default:
            return oldState;
    }
}