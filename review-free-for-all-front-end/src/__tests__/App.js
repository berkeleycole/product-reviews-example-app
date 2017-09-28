import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("renders header for title page", ()=>{
  const app = mount(<App />)
  expect(app.find('.subtitle').text()).toEqual('Product Reviews App')});
