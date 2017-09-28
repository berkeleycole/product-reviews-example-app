import React, { Component } from 'react';
import {
  Grid,
  PageHeader,
} from 'react-bootstrap'



class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [
        {id: 0,
        name: 'Product 1',
        description: 'asdf',
        },
        {id: 1,
        name: 'Product 2',
        description: 'asdf',
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1 className='Header'>Products</h1>
          {
            this.state.products.map((product, index)=>{
                return(
                    <div>
                      <h3>Name: {product.name}</h3>
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
