import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/header';
import toJson from 'enzyme-to-json';


describe('Testing Header Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(toJson(wrapper)).toMatchSnapshot();

    });
});