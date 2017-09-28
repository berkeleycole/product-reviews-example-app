import React, { Component } from 'react';
import {
  Grid,
  PageHeader,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
  Button
} from 'react-bootstrap'

class Add extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>
          Add A Product
        </PageHeader>
        <form>
          <ControlLabel>Product Name</ControlLabel>
          <FormGroup>
            <FormControl type="text" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Product Description</ControlLabel>
            <FormControl componentClass="textarea"></FormControl>
          </FormGroup>
          <FormControl.Feedback />
          <Button type="submit">Submit</Button>
        </form>
      </Grid>
    );
  }
}

export default Add;
