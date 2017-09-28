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
          name: 'LFGLAFG',
          description: 'asdf',
          }
        ]
      }
  }


  render() {
    return (
      <div>
        <h3>  {this.state.products[0].name}</h3>
        <p>   {this.state.products[0].description}</p>
      </div>
    );
  }
}

export default ProductPage;
