import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleTimeDuration from './ArticleTimeDuration';

Enzyme.configure({ adapter: new Adapter() });

it('render component', () => {
    const wrapper = shallow(<ArticleTimeDuration />)

    expect(wrapper).toBeDefined()
})
