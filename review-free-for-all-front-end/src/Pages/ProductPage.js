import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'


class ProductPage extends Component {
  constructor(props){
      super(props)
      this.state = {
        products: [
          {id: 0,
          name: 'Product 1',
          description: 'asdf',
          reviews: 'I WUV DIS PRODUCT'
          }
        ]
      }
  }


  render() {
    return (
      <div>
        <h1 className='Header'> Product Profile Page </h1>
        <h2>  {this.state.products[0].name}</h2>
        <p>   {this.state.products[0].description}</p>
        <h3>  Reviews </h3>
        <p> {this.state.products[0].reviews} </p>
        <h3>  Add Review </h3>
        <form>
        <textarea rows="5" cols="40">
          </textarea>
          <br></br>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProductPage;
