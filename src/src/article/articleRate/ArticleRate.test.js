import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleRate from './ArticleRate';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<ArticleRate />)

it('render component', () => {
    expect(wrapper).toBeDefined()
})

it('contains a rate div', () => {
    expect(wrapper.find('div.Article-rate').exists()).toBeTruthy()
})

it('contains a text element', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy()
})