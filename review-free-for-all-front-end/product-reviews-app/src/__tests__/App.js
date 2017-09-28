import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Add from '../pages/Add';
import { mount } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Add />, div);
});
