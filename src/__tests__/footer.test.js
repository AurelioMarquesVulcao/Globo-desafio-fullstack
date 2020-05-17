import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/footer';
import toJson from 'enzyme-to-json';


describe('Testing Footer Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <Footer />
        );
        expect(toJson(wrapper)).toMatchSnapshot();

    });
});