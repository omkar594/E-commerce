import {api} from "../../../../Config/apiConfig.js";
import { CREATE_PRODUCTS_REQUEST, FIND_PRODUCTS_BY_ID_FAILURE, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType.js";
import { CREATE_PRODUCTS_FAILURE } from "./ActionType.js";
import { DELETE_PRODUCTS_SUCCESS } from "./ActionType.js";
import { DELETE_PRODUCTS_FAILURE } from "./ActionType.js";
import { DELETE_PRODUCTS_REQUEST } from "./ActionType.js";
import { CREATE_PRODUCTS_SUCCESS } from "./ActionType.js";
import { FIND_PRODUCTS_BY_ID_SUCCESS } from "./ActionType.js";
import { FIND_PRODUCTS_BY_ID_REQUEST } from "./ActionType.js";
import { API_BASE_URL } from '../../../../Config/apiConfig.js';

export const findProducts=(reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_REQUEST})
const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    pageNumber,
    pageSize,
} = reqData;
try{
    const {data}=await api.get('/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}=&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stcok}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}')
console.log("product data", data)
    dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
} catch (error) {
    dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
}
};

export const findProductById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCTS_BY_ID_REQUEST})
const {productId}= reqData;
console.log("product id",productId)
try{
    const{data}=await api.get(`/api/products/id/${productId}`)
    console.log("data", data)

    dispatch({type:FIND_PRODUCTS_BY_ID_SUCCESS,payload:data})
}catch (error){
    dispatch({type:FIND_PRODUCTS_BY_ID_FAILURE,payload:error.message})

}
};

export const createProduct=(product)=>async(dispatch)=>{
    try{
        dispatch({type:CREATE_PRODUCTS_REQUEST})

        const {data}=await api.post(`/api/admin/products`,product);
        console.log("created products", data)
        dispatch({
            type:CREATE_PRODUCTS_SUCCESS,
            payload:data,
        })
    }catch (error){
        dispatch({
            type:CREATE_PRODUCTS_FAILURE, payload:error.message})
    }
}

export const deleteProduct=(productId)=>async(dispatch)=>{
    try{
        dispatch({type:DELETE_PRODUCTS_REQUEST})

        const {data}=await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
        console.log("delete product",data)
        dispatch({
            type:DELETE_PRODUCTS_SUCCESS,
            payload:productId,
        })
    }catch (error){
        dispatch({
            type:DELETE_PRODUCTS_FAILURE, payload:error.message})
    }
}


