import { combineReducers } from 'redux';
import orders from './orders';
import customers from './customers';

export default combineReducers({
    orders,
    customers
});