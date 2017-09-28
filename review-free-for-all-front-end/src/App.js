import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'

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
