import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'



class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [
        {id: 0,
        name: 'LFGLAFG',
        description: 'asdf',
        },
        {id: 1,
        name: 'ADFGKSDG',
        description: 'asdf',
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <ol>
          {this.state.products.map((product, index)=>{
            return(
            <li key ={index}>
              <h3>  Name: {product.name} </h3>
                Description: {product.description}
            </li>
          )
          }
          )}
        </ol>
      </div>
    );
  }
}

export default Index;
