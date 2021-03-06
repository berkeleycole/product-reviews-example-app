import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'
import Add from './Pages/Add'
import Index from './Pages/Index'
import ProductPage from './Pages/ProductPage'
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
      products: [],
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



  componentWillMount(){
    fetch(`${this.state.apiUrl}/`)
    .then((rawResponse) =>{
      return rawResponse.json()
    })
    .then((parsedResponse)=>{
      console.log(parsedResponse)
      this.setState({products: parsedResponse.product})
    })
  }

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
