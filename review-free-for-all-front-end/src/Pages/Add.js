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
  InputGroup,
  Alert,
  HelpBlock
} from 'react-bootstrap'


const defaultForm = {
  name: '',
  description: ''
}


class Add extends Component {
constructor(props) {
  super(props)
  this.state = {
    form: defaultForm
  }
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
            <FormControl type="text" placeholder="Name" name="name"
            onChange={this.handleChange.bind(this)}/>
            {this.errorsFor('name') &&
                <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
              }
          </FormGroup>
          <FormGroup validationState={this.errorsFor('description') && 'error'}>
            <ControlLabel>Product Description</ControlLabel>
            <FormControl componentClass="textarea" name="description"
            onChange={this.handleChange.bind(this)}></FormControl>
              {this.errorsFor('description') &&
                  <HelpBlock id="description-help-block">{this.errorsFor('description')}</HelpBlock>
              }
          </FormGroup>
          <FormControl.Feedback />
          <Button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</Button>
        </form>
      </Grid>
    );
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onSubmit(this.state.form)
    this.setState({form: defaultForm})
  }

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
}

export default Add;
