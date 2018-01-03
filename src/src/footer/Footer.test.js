import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<Footer />)

it('render component', () => {
    expect(wrapper).toBeDefined()
})