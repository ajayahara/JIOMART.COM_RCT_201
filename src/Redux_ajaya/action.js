import * as types from "./actionType";

let addToCart=(payload)=>{
    return {type:types.AddToCart,payload:payload}
}
let authentication=()=>{
    return {type:types.Authentication}
}
let addAddress=(payload)=>{
    return {type:types.AddAddress,payload:payload}
}
let Auth=()=>(dispatch)=>{
    dispatch(authentication());
}
let Add=(payload)=>(dispatch)=>{
    dispatch(addToCart(payload))
}
let Address=(payload)=>(dispatch)=>{
    dispatch(addAddress(payload))
}
export {Auth,Add,Address}