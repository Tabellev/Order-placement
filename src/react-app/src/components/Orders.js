import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchOrder} from "../actions/orders";
import SearchOrder from "./SearchOrder";
import OrderForm from './OrderForm'
import SearchCustomer from "./SearchCustomer";

class Orders extends Component{

    constructor() {
        super();

        this.state = {
            order: {}
        }
    }
    handleClick() {
        console.log(this.props);
        const { fetchOrder } = this.props;
        fetchOrder();
    }

    render() {
        return (
            <div className="Orders">
                <SearchOrder/>
                <SearchCustomer/>
                <div className="Separator"/>
                <OrderForm/>
            </div>
        );
    }
}


export default connect(
    (state) => {
        return {order: state.order};
    },
    (dispatch) => {
        return {
            fetchOrder: (firstName, lastName, phoneNumber) => dispatch(fetchOrder(firstName, lastName, phoneNumber))
        }
    }
)(Orders);

