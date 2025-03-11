// import axios from "axios";
import {
  SUBMIT_PRICE_REQUEST,
  SUBMIT_PRICE_SUCCESS,
  SUBMIT_PRICE_FAILURE,
  FETCH_PENDING_PRICES,
  FETCH_PENDING_SUCCESS,
  FETCH_PENDING_FAILURE,
  APPROVE_REJECT_PRICE,
  APPROVE_REJECT_SUCCESS,
  APPROVE_REJECT_FAILURE,
} from "./ActionType";

import { api } from "../../Config/apiConfig.js";
import { API_BASE_URL } from "../../Config/apiConfig";
// const BASE_URL = "http://localhost:5454/api/prices";

// **Submit Price Request Action**
export const submitPriceRequest = (userId, productId, proposedPrice) => {
  return async (dispatch) => {
    dispatch({ type: SUBMIT_PRICE_REQUEST });
    
    try {
      console.log("This is the data which i get in action ",userId,productId,proposedPrice);
      const response = await api.post(`${API_BASE_URL}/api/prices/submit-price`, {
        userId,
        productId,
        proposedPrice,
      });

      dispatch({ type: SUBMIT_PRICE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SUBMIT_PRICE_FAILURE, payload: error.response.data });
    }
  };
};

// **Fetch Pending Prices (Admin)**
export const fetchPendingPrices = () => {
  console.log("fecth pending");
  return async (dispatch) => {
    dispatch({ type: FETCH_PENDING_PRICES });

    try {
      const response = await api.get(`${API_BASE_URL}/api/prices/pending-prices`);
      dispatch({ type: FETCH_PENDING_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PENDING_FAILURE, payload: error.response.data });
    }
  };
};

// **Approve or Reject Price**
export const approveRejectPrice = (requestId, action) => {
  return async (dispatch) => {
    dispatch({ type: APPROVE_REJECT_PRICE });

    try {
      const response = await api.post(`${API_BASE_URL}/api/prices/approve-reject-price`, {
        requestId,
        action,
      });

      dispatch({ type: APPROVE_REJECT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: APPROVE_REJECT_FAILURE, payload: error.response.data });
    }
  };
};
