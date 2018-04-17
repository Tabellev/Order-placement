import React, { Component } from 'react';
import '../App.css';
import {Form, FormGroup, FormControl, ControlLabel, Grid, Row, Col} from 'react-bootstrap';

class OrderType extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'moving'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={8}>
                            <Form className="col-sm-12 offset-sm-4">
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Select</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="moving">Flytting</option>
                                        <option value="packing">Pakking</option>
                                        <option value="cleaning">Vasking</option>
                                    </FormControl>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default OrderType;
