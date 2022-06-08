import { mount } from "enzyme";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/iu/NavBar";
import { MemoryRouter } from "react-router-dom";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();
const dispatch = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))


describe('Pruebas en el <NavBar />', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Pedro'
        },
        dispatch: dispatch
    };

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue } >
            <MemoryRouter initialEntries={ ['/navbar']}>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    );


    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro');
    });


    test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {

        wrapper.find('button').simulate('click');
        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledWith('/login', {
            replace: true
        });
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });
    });
});