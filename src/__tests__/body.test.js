import React from 'react';
import { shallow } from 'enzyme';
import Body from '../components/body';
import { intersects } from 'semver';


describe('Testing Body Component', () => {
    it('should render correctly', ()=>{
        // 'wrapper' posso usar outros nomes
        const wrapper = shallow(
            <body/>
        );
        expect(wrapper).toMatchSnapshot();
        
    });
});