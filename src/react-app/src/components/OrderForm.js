import React, { Component  } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Grid, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker'

class OrderForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            order: {},
            customer: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                currentAddress: {
                    streetname: '',
                    zipcode: '',
                    city: ''
                },
                newAddress: {
                    streetname: '',
                    zipcode: '',
                    city: ''
                }
            },
            date: new Date()
        }
    }

    onDateChange = date => this.setState({ date });

    handleFirstNameChange(evt) {
        this.setState({customer: {...this.state.customer, firstName: evt.target.value}}, console.log(this.state.customer));
    }

    handlLasteNameChange(evt) {
       this.setState({customer: {...this.state.customer, lastName: evt.target.value}});
    }

    handlePhoneChange(evt) {
        this.setState({customer: {...this.state.customer, phoneNumber: evt.target.value}});
    }

    handleEmailChange(evt) {
        this.setState({customer: {...this.state.customer, email: evt.target.value}});
    }

    handleCurrentStreennameChange(evt) {
        let currentAddress = {
            streetname: evt.target.value,
            zipcode: this.state.customer.currentAddress.zipcode,
            city: this.state.customer.currentAddress.city
        };
        this.setState({customer: {...this.state.customer, currentAddress: currentAddress}});
    }

    handleCurrentZipcodeChange(evt) {
        let currentAddress = {
            streetname: this.state.customer.currentAddress.streetname,
            zipcode: evt.target.value,
            city: this.state.customer.currentAddress.city
        };
        this.setState({customer: {...this.state.customer, currentAddress: currentAddress}});
    }

    handleCurrentCityChange(evt) {
        let currentAddress = {
            streetname: this.state.customer.currentAddress.streetname,
            zipcode: this.state.customer.currentAddress.zipcode,
            city: evt.target.value
        };
        this.setState({customer: {...this.state.customer, currentAddress: currentAddress}});
    }

    handleNewStreennameChange(evt) {
        let newAddress = {
            streetname: evt.target.value,
            zipcode: this.state.customer.currentAddress.zipcode,
            city: this.state.customer.currentAddress.city
        };
        this.setState({customer: {...this.state.customer, currentAddress: newAddress}});
    }

    handleNewZipcodeChange(evt) {
        let newAddress = {
            streetname: this.state.customer.currentAddress.streetname,
            zipcode: evt.target.value,
            city: this.state.customer.currentAddress.city
        };
        this.setState({customer: {...this.state.customer, currentAddress: newAddress}});
    }

    handleNewCityChange(evt) {
        let newtAddress = {
            streetname: this.state.customer.currentAddress.streetname,
            zipcode: this.state.customer.currentAddress.zipcode,
            city: evt.target.value
        };
        this.setState({customer: {...this.state.customer, currentAddress: newtAddress}});
    }

    handleButtonSaveClick() {

    }

    handleButtonDeleteClick() {

    }


    componentWillReceiveProps(newProps) {
        this.setState({
            customer: newProps.customer.customer
        }, console.log(this.state.firstName));
    }
    render() {
        const state = this.state;
        return (
            <div className="Order-form">
                <Grid>
                        <Col md={8}>
                            <Form horizontal>
                                <FormGroup controlId="formControlsName">
                                    <Col componentClass={ControlLabel} sm={2}>Fornavn</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.firstName || ''}
                                            onChange={this.handleFirstNameChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControlsName">
                                    <Col componentClass={ControlLabel} sm={2}>Etternavn</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.lastName || ''}
                                            onChange={this.handlLasteNameChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllPhome">
                                    <Col componentClass={ControlLabel} sm={2}>Telefonnumer</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.phoneNumber}
                                            onChange={this.handlePhoneChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllEmail">
                                    <Col componentClass={ControlLabel} sm={2}>Epost</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.email}
                                            onChange={this.handleEmailChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllCurrentAddress">
                                    <Col componentClass={ControlLabel} sm={2}>Nåværende gateadresse</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.currentAddress.streetname}
                                            onChange={this.handleCurrentStreennameChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllCurrentAddress">
                                    <Col componentClass={ControlLabel} sm={2}>Nåværende postnummer</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.currentAddress.zipcode}
                                            onChange={this.handleCurrentZipcodeChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllNewAdress">
                                    <Col componentClass={ControlLabel} sm={2}>Nåværende by</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.newAddress.city}
                                            onChange={this.handleCurrentCityChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllCurrentAddress">
                                    <Col componentClass={ControlLabel} sm={2}>Ny gateadresse</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.currentAddress.streetname}
                                            onChange={this.handleNewStreennameChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllCurrentAddress">
                                    <Col componentClass={ControlLabel} sm={2}>Nytt postnummer</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.currentAddress.zipcode}
                                            onChange={this.handleNewZipcodeChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllNewAdress">
                                    <Col componentClass={ControlLabel} sm={2}>Ny by</Col>
                                    <Col sm={10}>
                                        <FormControl
                                            type="text"
                                            value={state.customer.newAddress.city}
                                            onChange={this.handleNewCityChange.bind(this)}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllNote">
                                    <Col componentClass={ControlLabel} sm={2}>Beskjed</Col>
                                    <Col sm={10}>
                                        <FormControl componentClass="textarea"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllServiceType">
                                    <Col componentClass={ControlLabel} sm={2}>Tjeneste</Col>
                                    <Col sm={10}>
                                        <FormControl componentClass="select" placeholder="select">
                                            <option value="moving">Flytting</option>
                                            <option value="packing">Pakking</option>
                                            <option value="cleaning">Vasking</option>
                                        </FormControl>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formControllOrderDate">
                                    <Col componentClass={ControlLabel} sm={2}>Dato for utførelse</Col>
                                    <Col sm={10}>
                                        <DatePicker onChange={this.onDateChange.bind(this)} value={this.state.date}/>
                                    </Col>
                                </FormGroup>
                                <Button bsStyle="primary" onClick={this.handleButtonSaveClick.bind(this)}>Lagre</Button>{'   '}
                                <Button bsStyle="danger" onClick={this.handleButtonDeleteClick.bind(this)}>Slett</Button>
                            </Form>
                        </Col>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        customer : state.customers
    }
};

export default connect(
    mapStateToProps
)(OrderForm)
