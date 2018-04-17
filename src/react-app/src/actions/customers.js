import 'whatwg-fetch';

export const FETCH_CUSTOMER_STARTED = 'FETCH_CUSTOMER_STARTED';
export const FETCH_CUSTOMER_FULFILLED = 'FETCH_CUSTOMER_FULFILLED';
export const FETCH_CUSTOMER_FAILED = 'FETCH_CUSTOMER_FAILED';

export function fetchCustomerStarted() {
    return {
        type: FETCH_CUSTOMER_STARTED,
        payload: {}
    };
}

export function fetchCustomerFulfilled(jsonResponse) {
    return {
        type: FETCH_CUSTOMER_FULFILLED,
        payload: {jsonResponse}
    };
}

export function fetchCustomerFailed(error) {
    return {
        type: FETCH_CUSTOMER_FAILED,
        payload: {error}
    };
}

export const fetchCustomer = (firstName, lastName, phoneNumber) => {
    console.log("action");
    return (dispatch) => {
        dispatch(fetchCustomerStarted());
        console.log("Started");
        return fetch('/customer/' + firstName + "/" + lastName + "/" + phoneNumber, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin':'*'}
        }).then((response) => {
            if(response.status >= 200 && response.status < 300) {
                    console.log(response);
                    return response.json();
                }
            })
            .then(json => dispatch(fetchCustomerFulfilled(json)))
            .catch(error => dispatch(fetchCustomerFailed(error)));
    }
};