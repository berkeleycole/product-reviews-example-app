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
          }
        ]
      }
  }


  render() {
    return (
      <div>
        <h1 className='Header'> Product Profile Page </h1>
        <h3>  {this.state.products[0].name}</h3>
        <p>   {this.state.products[0].description}</p>
      </div>
    );
  }
}

export default ProductPage;
