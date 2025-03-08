import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";
import { api } from "../../Config/apiConfig.js";

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
  // console.log("reqData",reqData.size);
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

// 🔹 Fetch Product by ID
export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("@@@@@@@@",data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
