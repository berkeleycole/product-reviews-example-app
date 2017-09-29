import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'
import Add from './pages/Add'
import Index from './pages/Index'
import ProductPage from './pages/ProductPage'
import styles from './App.css'
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      products: [
        {id: 0,
        name: 'Product 1',
        description: 'asdf',
        reviews: ['I WUV DIS SO MUCH']
        },
        {id: 1,
        name: 'Product 2',
        description: 'asdf',
        reviews: ['DIS AIIGHT']
        }
      ],
      newProductSuccess: false,
      errors: null
    }
  }

  handleNewProduct(params){
    fetch(`${this.state.apiUrl}/add-product`,
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
      if(parsedResponse.errors){
        this.setState({errors: parsedResponse.errors})
      }else{
        const products = Object.assign([], this.state.products)
        products.push(parsedResponse.product)
        this.setState({
          products: products,
          errors: null,
          newProductSuccess: true
        })
      }
    })
  }



  // componentWillMount(){
  //   fetch(`${this.state.apiUrl}/`)
  //   .then((rawResponse) =>{
  //     return rawResponse.json()
  //   })
  //   .then((parsedResponse)=>{
  //     this.setState({products: parsedResponse.products})
  //   })
  // }

  render() {
    return (
      <Router>
        <div>
          <PageHeader className="mainApp">
            Product Reviews App
          </PageHeader>

          <Route exact path="/" render={(props) => (
            <Grid>
              <Index products={this.state.products}/>
            </Grid>
          )} />

          <Route exact path="/add-product" render={(props) => (
            <Add
              onSubmit={this.handleNewProduct.bind(this)}
            />
            // {this.state.newProductSuccess &&
            //   <Redirect to="/"/>
            // }
          )} />

          <Route exact path="/product/:id" render={(props) => (
            <ProductPage product={this.state.products[props.match.params.id]}/>
          )} />
        </div>
      </Router>
    );
  }
}


export default App;
