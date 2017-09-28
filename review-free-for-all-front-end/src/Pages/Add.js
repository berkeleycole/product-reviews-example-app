import React, { Component } from 'react';
import {
  Col,
  Button,
  Grid,
  PageHeader,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup

} from 'react-bootstrap'

class Add extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>
          Add A Product
        </PageHeader>
        <Form horizontal>
          <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl type="name" placeholder="Name" />
            </Col>
            </FormGroup>
          <FormGroup controlId="formControlsTextarea" >
            <Col componentClass={ControlLabel} sm={2}>
              Description
            </Col>
            <Col sm={10}>
              <FormControl componentClass="textarea" placeholder="Description" />
            </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Submit
                </Button>
              </Col>
            </FormGroup>
        </Form>
      </Grid>
    );
  }
}

export default Add;
