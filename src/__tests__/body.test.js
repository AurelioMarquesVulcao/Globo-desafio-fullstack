import React from 'react';
import { shallow } from 'enzyme';
import Body from '../components/body';
import toJson from 'enzyme-to-json';


describe('Testing Body Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <Body />
        );
        expect(toJson(wrapper)).toMatchSnapshot();   
    });
});