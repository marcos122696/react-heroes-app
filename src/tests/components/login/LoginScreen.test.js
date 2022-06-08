import { mount } from "enzyme";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types/types";


const mockNavigate = jest.fn();
const dispatch = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate
}))

describe('Pruebas en el <LoginScreen />', () => {

    const contextValue = {
        user: {
            logged: false,
        },
        dispatch: dispatch
    }

    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue } >
            <MemoryRouter initialEntries={['/login']}>
                <LoginScreen /> 
            </MemoryRouter>
        </AuthContext.Provider>
    );
    test('Debe mostrarse correctamente', () => { 

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegacion', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Marcos'
            }
        };
        
        // localStorage.setItem('lastPath', '/');
        wrapper.find('button').simulate('click');
        expect( dispatch ).toHaveBeenCalledWith( action );
        expect( mockNavigate ).toHaveBeenCalledWith('/marvel', {
            replace: true
        });

        localStorage.setItem('lastPath', '/dc');
        wrapper.find('button').simulate('click');
        expect( dispatch ).toHaveBeenCalledTimes( 2 );
        expect( mockNavigate ).toHaveBeenCalledWith('/dc', {
            replace: true
        });
    });
});