import {
    FETCH_ORDER_STARTED,
    FETCH_ORDER_FULFILLED,
    FETCH_ORDER_FAILED
} from "../actions/orders";

const initialState = {
  customer: {},
  order: {}
};

const orders = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDER_STARTED:
            return state;
        case FETCH_ORDER_FULFILLED:
            return {...state, fetchError: false, order: action.payload.jsonResponse};
        case FETCH_ORDER_FAILED:
            console.log("Failed");
            console.log(action.payload.error);
            return {...state, fetchError: true, errorMsg: action.payload.error, order: initialState.order};
        default:
            return state;
    }
};

export default orders;