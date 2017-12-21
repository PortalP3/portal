import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from './Article';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Article />)

it('render component', () => {
  expect(wrapper).toBeDefined()
})

it('contains an ArticleTitle component', () => {
  expect(wrapper.find('ArticleTitle').exists()).toBeTruthy()
})
