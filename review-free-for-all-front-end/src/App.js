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
<<<<<<< HEAD
		<div>
	      <Grid>
	        <PageHeader>
				<h1 className='subtitle'>Product Reviews App</h1>
	        </PageHeader>
	      </Grid>
		</div>
=======
      <Grid>
        <PageHeader className="class">
          Product Reviews App
        </PageHeader>
        <Add />
        <Index />
        <ProductPage />
      </Grid>
>>>>>>> 5909555788d1a9adf8a2a40b3b7232f2040094e3
    );
  }
}


export default App;
