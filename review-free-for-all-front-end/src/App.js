import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'
import Add from './Pages/Add'
import Index from './Pages/Index'
import ProductPage from './Pages/ProductPage'
import styles from './App.css'

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader className="class">
          Product Reviews App
        </PageHeader>
        <Add />
        <Index />
        <ProductPage />
      </Grid>
    );
  }
}


export default App;
