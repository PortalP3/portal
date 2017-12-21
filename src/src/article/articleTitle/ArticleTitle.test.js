import React from 'react';
import Enzyme, { shallow }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleTitle from './ArticleTitle';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<ArticleTitle />)

it('render component', () => {
    expect(wrapper).toBeDefined()
})

it('contains a header element', () => {
    expect(wrapper.find('header').exists()).toBeTruthy()
})
