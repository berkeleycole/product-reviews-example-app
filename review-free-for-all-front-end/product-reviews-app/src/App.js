import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'
import Add from './pages/Add'

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>
          Product Reviews App
        </PageHeader>
        <Add />
      </Grid>
    );
  }
}

export default App;
