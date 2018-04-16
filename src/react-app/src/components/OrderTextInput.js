import React, { Component } from 'react';
import '../App.css';

class OrderTextInput extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="Order-textinput">
               <label className="Order-text-label">
                   {this.props.label}
                   <input className="Order-text-input" type="text" value={this.state.value} onChange={this.handleChange} />
               </label>

            </div>
        );
    }
}

export default OrderTextInput