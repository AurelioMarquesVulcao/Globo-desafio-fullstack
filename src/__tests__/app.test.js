import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import toJson from 'enzyme-to-json';


describe('Testing App Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <App />
        );
        expect(toJson(wrapper)).toMatchSnapshot();

    });
});