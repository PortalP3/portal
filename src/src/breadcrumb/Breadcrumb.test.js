import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Breadcrumb from './Breadcrumb';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Breadcrumb />)

it('render component', () => {
    expect(wrapper).toBeDefined()
})

it('contains an aside element', () => {
    expect(wrapper.find('aside').exists()).toBeTruthy()
})
