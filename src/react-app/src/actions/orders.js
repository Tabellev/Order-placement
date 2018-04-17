import 'whatwg-fetch';

export const FETCH_ORDER_STARTED = 'FETCH_ORDER_STARTED';
export const FETCH_ORDER_FULFILLED = 'FETCH_ORDER_FULFILLED';
export const FETCH_ORDER_FAILED = 'FETCH_ORDER_FAILED';

export function fetchOrderStarted() {
    return {
        type: FETCH_ORDER_STARTED,
        payload: {}
    };
}

export function fetchOrderFulfilled(jsonResponse) {
    return {
        type: FETCH_ORDER_FULFILLED,
        payload: {jsonResponse}
    };
}

export function fetchOrderFailed(error) {
    return {
        type: FETCH_ORDER_FAILED,
        payload: {error}
    };
}

export const fetchOrder = (firstName, lastName, phoneNumber) => {
    console.log("action");
    /*let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
    });*/
    return (dispatch) => {
        dispatch(fetchOrderStarted());
      console.log("Started");
      return fetch('http://169.254.0.78:8080/rest/customer/' + 1, {
          mode: 'no-cors',
          headers: {
              'Access-Control-Allow-Origin':'*',
              'Content-Type': 'application/json'
          }
    })
          .then((response) => {
              if(response.status >= 200 && response.status < 300) {
                  return response.json();
              }
          })
          .then(json => dispatch(fetchOrderFulfilled(json)))
          .catch(error => dispatch(fetchOrderFailed(error)));
  }
}; //http://169.254.0.78:8080/rest/customer/' + 1