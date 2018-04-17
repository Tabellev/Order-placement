import React, {Component} from "react";
import {Form, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Button} from 'react-bootstrap';

class SearchOrder extends Component{

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
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <Form inline className="col-sm-12 offset-sm-4">
                            <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Hent ordre</ControlLabel>{" "}
                                    <FormControl
                                        type="text"
                                        value={this.state.value}
                                        placeholder="Ordrenummer"
                                        onChange={this.handleChange}/>
                                </FormGroup>{" "}
                                <Button bsStyle="primary">Hent</Button>
                            </Form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default SearchOrder