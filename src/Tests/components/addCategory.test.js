import { shallow } from 'enzyme';
import React from 'react';
import AddCategory from '../../components/AddCategory';

describe('pruebas en <addcategory>', () => {

    const setCategories = jest.fn();
    const onChangeItem = jest.fn();
    const wrapper = shallow(<AddCategory onchangeAddcategories={setCategories} onchangeItem={onChangeItem} />);


    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('change on textbox', () => {

        const input = wrapper.find('input');
        const value = "Hola mundo";
        input.simulate("change", { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);   
    });

})