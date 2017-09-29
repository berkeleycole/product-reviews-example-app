import React, { Component } from 'react';
import {
  Grid,
  PageHeader,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
  Button,
  Alert,
  HelpBlock
} from 'react-bootstrap'

class Add extends Component {

  errorsFor(attribute){
    var errorString = ""
    if(this.props.errors){
      const errors = this.props.errors.filter(error => error.param === attribute )
      if(errors){
        errorString = errors.map(error => error.msg ).join(", ")
      }
    }
    return errorString === "" ? null : errorString
  }

  render() {
    return (
      <Grid>
        <PageHeader className='Header'>
          Add A Product
        </PageHeader>
        <form>
          {this.props.errors &&
            <Alert bsStyle="danger">
              Please make sure all fields are filled in.
            </Alert>
          }
          <ControlLabel>Product Name</ControlLabel>
          <FormGroup validationState={this.errorsFor('name') && 'error'}>
            <FormControl type="text" placeholder="Name" />
            {this.errorsFor('name') &&
                <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
              }
          </FormGroup>
          <FormGroup validationState={this.errorsFor('description') && 'error'}>
            <ControlLabel>Product Description</ControlLabel>
            <FormControl componentClass="textarea"></FormControl>
              {this.errorsFor('description') &&
                  <HelpBlock id="description-help-block">{this.errorsFor('description')}</HelpBlock>
              }
          </FormGroup>
          <FormControl.Feedback />
          <Button type="submit">Submit</Button>
        </form>
      </Grid>
    );
  }
}

export default Add;
