import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD:review-free-for-all-front-end/product-reviews-app/src/__tests__/App.js
import App from '../App';
import Add from '../pages/Add';
import { mount } from 'enzyme';

=======
import Index from '../Pages/Index';
import { mount } from 'enzyme'
>>>>>>> 15e5d32a8dd240c224c6d649f478abb199176473:review-free-for-all-front-end/src/__tests__/Index.js

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index />, div);
});

<<<<<<< HEAD:review-free-for-all-front-end/product-reviews-app/src/__tests__/App.js

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Add />, div);
=======
it("renders title", ()=>{
  const index = mount(<Index />)
  expect(index.find('h1').text()).toEqual('Products')
>>>>>>> 15e5d32a8dd240c224c6d649f478abb199176473:review-free-for-all-front-end/src/__tests__/Index.js
});
