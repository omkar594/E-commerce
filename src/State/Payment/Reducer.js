import {
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_FAILURE
} from "./ActionType";

const initialState = {
    loading: false,
    paymentLink: null,
    updatePaymentData: null,
    error: null
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case CREATE_PAYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case UPDATE_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case UPDATE_PAYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default paymentReducer;
