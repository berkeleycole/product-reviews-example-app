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
		<div>
	      <Grid>
	        <PageHeader>
				<h1 className='subtitle'>Product Reviews App</h1>
	        </PageHeader>
	      </Grid>
		</div>
    );
  }
}


export default App;
