import { shallow } from "enzyme";
import { DcScreen } from "../../../components/dc/DcScreen";
import React from 'react';

describe('Pruebas en en el componente <DcScreen />', () => {
    
    test('Debe de mostrarse correctamente', () => {

        const wrapper = shallow(<DcScreen />);
        expect(wrapper).toMatchSnapshot();
    });
});