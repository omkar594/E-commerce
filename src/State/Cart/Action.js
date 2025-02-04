import {api} from "../../Config/apiConfig";
import { ADD_ITEM_TO_CART_FAILURE, GET_CART_FAILURE, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"



export const get=()=>async(dispatch)=>{
    dispatch({type:GET_CART_REQUEST})

    try {
        const {data}=await api.get(`/api/cart/`)
        dispatch({type:GET_CART_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_CART_FAILURE,payload:e.message})
    }
}
export const addItemToCart=(reqData)=>async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})

    try {
        const {data}=await api.put("/api/cart/add".reqData.data)
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message})
    }catch(e){
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:e.message})
    }
}


export const removeCartItem=(reqData)=>async(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})

    try {
        const {data}=await api.delete(`/api/cart_items/${reqData.cartItemId}`)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:e.message})
    }
}



export const updateCartItem=(reqData)=>async(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})

    try {
        const {data}=await api.put(`/api/cart_items/${reqData.cartItemId}`,reqData.data)
        dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:e.message})
    }
}