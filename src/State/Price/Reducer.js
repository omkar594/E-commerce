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
  
  const initialState = {
    pendingPrices: [],
    loading: false,
    error: null,
    userPriceStatus: null,
  };
  
  const priceReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_PRICE_REQUEST:
        return { ...state, loading: true, userPriceStatus: "pending" };
  
      case SUBMIT_PRICE_SUCCESS:
        return { ...state, loading: false, userPriceStatus: "submitted" };
  
      case SUBMIT_PRICE_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case FETCH_PENDING_PRICES:
        return { ...state, loading: true };
  
      case FETCH_PENDING_SUCCESS:
        return { ...state, loading: false, pendingPrices: action.payload };
  
      case FETCH_PENDING_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case APPROVE_REJECT_PRICE:
        return { ...state, loading: true };
  
      case APPROVE_REJECT_SUCCESS:
        return {
          ...state,
          loading: false,
          pendingPrices: state.pendingPrices.filter(
            (price) => price._id !== action.payload.updatedRequest._id
          ),
        };
  
      case APPROVE_REJECT_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default priceReducer;
  