import React, { Component } from 'react';
import '../App.css';
import {FormGroup, FormControl, ControlLabel, Grid, Row, Col} from 'react-bootstrap';

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
                        <Col xs={4} md={2}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Select</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Flytting</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default OrderType;
