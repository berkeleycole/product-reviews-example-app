import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'
import Add from './pages/Add'
import Index from './pages/Index'
import ProductPage from './pages/ProductPage'
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
