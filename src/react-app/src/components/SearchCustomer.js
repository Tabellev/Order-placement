import React, {Component} from "react";
import {Form, FormGroup, FormControl, ControlLabel, Grid, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {fetchCustomer} from "../actions/customers";

class SearchCustomer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: ''
        };
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handlePhoneNameChange(event) {
        this.setState({phone: event.target.value});
    }

    handleButtonClick() {
        const { fetchCustomer } = this.props;
        const { firstName, lastName, phone} = this.state;
        fetchCustomer(firstName, lastName, phone);

        this.setState({customer: this.props.customer});
    }

    render() {
        return (
            <div>
                <Grid>
                    <Col md={12}>
                        <label>Hent kunde</label>
                        <Form inline>
                            <FormGroup controlId="formControlFistName">
                                <ControlLabel>Fonavn</ControlLabel>{" "}
                                <FormControl
                                    type="text"
                                    value={this.state.firstName}
                                    placeholder="Fornavn"
                                    onChange={this.handleFirstNameChange.bind(this)}/>
                            </FormGroup>{" "}
                            <FormGroup controlId="formControlLastName">
                                <ControlLabel>Etternavn</ControlLabel>{" "}
                                <FormControl
                                    type="text"
                                    value={this.state.lastName}
                                    placeholder="Etternavn"
                                    onChange={this.handleLastNameChange.bind(this)}/>
                            </FormGroup>{" "}
                            <FormGroup controlId="formControlPhone">
                                <ControlLabel>Telefonnummer</ControlLabel>{" "}
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Telefonnummer"
                                    onChange={this.handlePhoneNameChange.bind(this)}/>
                            </FormGroup>{" "}
                            <Button bsStyle="primary" onClick={this.handleButtonClick.bind(this)}>Hent</Button>
                        </Form>
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {customer: state.customer};
    },
    (dispatch) => {
        return {
            fetchCustomer: (firstName, lastName, phoneNumber) => dispatch(fetchCustomer(firstName, lastName, phoneNumber))
        }
    }
)(SearchCustomer);