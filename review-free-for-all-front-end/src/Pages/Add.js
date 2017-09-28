import React, { Component } from 'react';
import {
  Grid,
  PageHeader,
  FormGroup,
  FormControl,
  ControlLabel,
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
          <ControlLabel>Name</ControlLabel>
          <FormGroup
            onChange={this.handleChange}
          >
            <FormControl componentClass="text" placeholder="text" value="name"></FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
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
