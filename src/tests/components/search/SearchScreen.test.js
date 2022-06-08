import { mount } from "enzyme";
import { SearchScreen } from "../../../components/search/SearchScreen";
import { MemoryRouter } from "react-router-dom";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Pruebas en el <SearchScreen />', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] } >
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('input').prop('value') ).toBe('');
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Busque un heroe');
    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman'] } >
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostarr un error si no se encuentra el heroe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=heroe prueba'] } >
                <SearchScreen />
            </MemoryRouter>
        );

        
        expect( wrapper.find('.alert-danger').text().trim() ).toBe('No hay resultados de: heroe prueba')
    });

    test('Debe de llamar el navigate a la nueva pantalla', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] } >
                <SearchScreen />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });
        wrapper.find('form').simulate( 'submit', {
            preventDefault: () => {},
        });

        expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');
    });
});