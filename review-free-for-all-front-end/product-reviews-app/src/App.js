import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'
import Index from './Pages/Index'

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader className="class">
          Product Reviews App
        </PageHeader>
        <Index />
      </Grid>
    );
  }
}

export default App;
