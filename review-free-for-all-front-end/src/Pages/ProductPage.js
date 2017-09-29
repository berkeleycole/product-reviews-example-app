import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'


class ProductPage extends Component {
constructor(props){
  super(props)
  this.state={
    product: this.props.product
  }
}

  render() {
    return (
      <div>
        <h1 className='Header'> Product Profile Page </h1>
        <h2>  {this.state.product.name}</h2>
        <p>   {this.state.product.description}</p>
        <h3>  Reviews </h3>
        <p>   {this.state.product.reviews} </p>
        <h3>  Add Review </h3>
        <form>
        <textarea rows="5" cols="40">
          </textarea>
          <br></br>
        <button type="submit" onSubmit={this.handleNewReview.bind(this)}>Submit</button>
        </form>
        <br></br>
        <a href="/">Back</a>
      </div>
    );
  }

  handleNewReview(params){
    fetch(`${this.state.apiUrl}/product/:id`,
      {
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse)=>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
        this.state.product.reviews.push(parsedResponse.reviews)
        this.setState({
          product: this.state.product
        })
      })
  }
}

export default ProductPage;
