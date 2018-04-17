import {
    FETCH_CUSTOMER_STARTED,
    FETCH_CUSTOMER_FULFILLED,
    FETCH_CUSTOMER_FAILED
} from "../actions/customers";

const initialState = {
    customer: {},
    order: {}
};

const customers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMER_STARTED:
            return state;
        case FETCH_CUSTOMER_FULFILLED:
            console.log("Fulfilled");
            return {...state, fetchError: false, customer: action.payload.jsonResponse};
        case FETCH_CUSTOMER_FAILED:
            console.log("Failed");
            console.log(action.payload.error);
            return {...state, fetchError: true, errorMsg: action.payload.error, customer: initialState.order};
        default:
            return state;
    }
};

export default customers;