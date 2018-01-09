import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SadFace from './SadFace';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<SadFace />)

it('render component', () => {
    expect(wrapper).toBeDefined()
})

it('contains a svg ', () => {
    expect(wrapper.find('svg').exists()).toBeTruthy()
})