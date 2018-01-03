import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleTimeDuration from './ArticleTimeDuration';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<ArticleTimeDuration />)

it('render component', () => {
    expect(wrapper).toBeDefined()
})

it('contains a Time duration style', () => {
    expect(wrapper.find('div.Time-duration').exists()).toBeTruthy()
})
