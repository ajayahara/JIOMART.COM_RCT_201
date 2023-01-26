import * as types from "./actionType"

const initialData = {
    cart: [{category: "Cold Drink",image: "https://www.jiomart.com/images/product/150x150/491121060/coca-cola-1-75-l-product-images-o491121060-p491121060-0-202206022121.jpg",name: "Coca Cola 1.75 L",price: 8,qty: 1
    },
    {
        category: "Tea",image: "https://www.jiomart.com/images/product/150x150/490001992/brooke-bond-red-label-strong-blend-tea-1-kg-product-images-o490001992-p490001992-0-202208101817.jpg",name: "Brooke Bond Red Label Strong Blend Tea 1 kg",price: 420,qty: 1
    }]
}
export const reducer = (oldState = initialData, action) => {
    let { type, payload } = action;
    console.log(type, action);
    let newArray=[]
    switch (type) {
        case types.ADD_TO_CART:
            return { ...oldState, cart: [...oldState.cart, { ...payload, qty: 1 }] }
        case types.DELETE_FROM_CART:
            newArray = [...oldState.cart];
            newArray = newArray.filter((el) => {
                return el.image !== payload;
            })
            return { ...oldState, cart: [...newArray] }
        case types.ADD_CART_ITEMS:
            newArray = [...oldState.cart]
            newArray = newArray.map((el) => {
                if (el.image=== payload) {
                    return { ...el, qty: el.qty + 1 }
                } else {
                    return el;
                }
            })
            return { ...oldState, cart: [...newArray] }
        case types.REDUCE_CART_ITEMS:
            newArray = [...oldState.cart]
            newArray = newArray.map((el) => {
                if (el.image === payload) {
                    return { ...el, qty: el.qty - 1 }
                } else {
                    return el;
                }
            })
            return { ...oldState, cart: [...newArray] }
        case types.RESET_CART:
            return initialData;
        default:
            return oldState;
    }
}