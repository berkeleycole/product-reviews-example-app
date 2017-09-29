import React, { Component } from 'react';
import {
  Grid,
  PageHeader,
} from 'react-bootstrap'

class Index extends Component {
  render() {
    return (
      <div>
        <h1 className='Header'>Products</h1>
          {
            this.props.products.map((product, index)=>{
                return(
                    <div>
                      <h3>Name: <a href={`/product/${product.id}`}>{product.name}</a></h3>
                      <p>Description: {product.description}</p>
                    </div>
                )
            })
          }

      </div>
    );
  }
}

export default Index;
