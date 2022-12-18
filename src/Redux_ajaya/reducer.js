import * as types from "./actionType"


const initialState={
    isAuth:false,
    cart:[],
    address:null
}



export const reducer=(Oldstate=initialState,action)=>{
        let {type,payload}=action;
        switch (type) {
            case types.Authentication:
                    return {...Oldstate,isAuth:true}
                    case types.AddToCart:
                        return {...Oldstate,cart:[...Oldstate.cart,payload]};
                        case types.AddAddress:
                        return {...Oldstate,address:payload}
            default:
              return Oldstate
        }
}