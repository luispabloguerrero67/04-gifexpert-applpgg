import { shallow } from "enzyme"
import { shallowToJson } from "enzyme-to-json"
import React from 'react';
import GifReadItem from '../../components/GifReadItem'

describe('Pruebas en <GifGridItem/>', () => {

    const title = 'title';
    const url = 'https://localhost/logo.jpg';
    const id = 1;
    const wrapper = shallow(<GifReadItem title={title} url={url} id={id} />);
    test('debe de mostrar el componente correctamente', () => {


        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('debe tener imagen con url y alt de los props',() =>{

        const img = wrapper.find('img');

        expect(img.props('alt').alt).toBe(title);
    })

    test('debe de tener animate_fadeind', () => { 
        
        const div = wrapper.find('div');
        const props = div.props('Classname').className;

        expect(props.includes('animate__fadeIn')).toBe(true);

        console.log(props);
     })
});