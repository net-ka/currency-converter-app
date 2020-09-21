import React from 'react';
import { NotFound } from './NotFound';

it('should render NotFound page component', () => {
  const component = shallow(<NotFound />);
  const wrapper = component.find('Layout');
  expect(wrapper.length).toBe(1);
});

it('should render Button component', () => {
  const component = shallow(<NotFound />);
  const wrapper = component.find('Button');
  expect(wrapper.length).toBe(1);
});
