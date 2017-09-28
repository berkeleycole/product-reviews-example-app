import React, { Component } from 'react';
import {
  Grid,
  PageHeader
} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader className="class">
          Product Reviews App
        </PageHeader>
      </Grid>
    );
  }
}

export default App;
