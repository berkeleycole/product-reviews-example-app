import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../Pages/Index';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index />, div);
});

it("renders title", ()=>{
  const index = mount(<Index />)
  expect(index.find('h1').text()).toEqual('Products')
});
