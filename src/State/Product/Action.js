import {
  CREATE_PRODUCTS_FAILURE,
  CREATE_PRODUCTS_REQUEST,
  CREATE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";
import { api } from "../../Config/apiConfig.js";
import { API_BASE_URL } from "../../Config/apiConfig";

// 🔹 Fetch Products with Filters
export const findproducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const {
    colors,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  console.log("reqData", reqData.category);
  try {
    const { data } = await api.get(
      `/api/products?color=${colors}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log("Product Data:", data); // Debugging
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};
//* Fetch User Price
export const getPrice = (reqData) => async (dispatch) => {
  console.log("price in the Action", reqData);
};

// 🔹 Fetch Product by ID
export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("@@@@@@@@", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCTS_REQUEST });
    console.log("I get the data of product",product)

    const { data } = await api.post(`/api/admin/products/`, product);
    console.log("created products", data);
    dispatch({
      type: CREATE_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCTS_REQUEST });

    const { data } = await api.delete(
      `${API_BASE_URL}/api/admin/products/${productId}/delete`
    );
    console.log("delete product", data);
    dispatch({
      type: DELETE_PRODUCTS_SUCCESS,
      payload: productId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};
