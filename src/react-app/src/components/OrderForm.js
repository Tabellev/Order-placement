import React, { Component } from 'react';
import OrderType from './OrderType';
import OrderTextInput from './OrderTextInput';
import { connect } from 'react-redux';
import {fetchOrder} from "../actions/orders";

class OrderForm extends Component{

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
            <div className="Order-form">
                <form>
                    <OrderType/>
                    <OrderTextInput label="Fornavn"/>
                    <OrderTextInput label="Etternavn"/>
                    <OrderTextInput label="Gatenavn"/>
                    <OrderTextInput label="Nummer"/>
                    <OrderTextInput label="Postnummer"/>
                    <OrderTextInput label="By"/>
                    <button onClick={this.handleClick.bind(this)}>Hent</button>
                </form>
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
)(OrderForm);

