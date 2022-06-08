import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom" ;
import { mount } from "enzyme";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Navigate: () => <h1>Saliendo de aqui</h1>
}))

describe('Pruebas en el <PrivateRoute />', () => {

    Storage.prototype.setItem = jest.fn();

    test('Deme de mostrar el componente si esta autenticado y guardar en el localStorage', () => {
        
        const contextValue = {
            user: {
                logged: true,
                name: 'Marcos'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Aqui children del private route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper.find('h1').text().trim() ).toBe('Aqui children del private route');
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/");
    });

    test('Debe de bloquear el componente si no esta autenticado', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Aqui children del private route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html())
        expect(wrapper.text().trim() ).toBe('Saliendo de aqui');
        // al tener solo una etiqueta no hace falta el .find('h1')
    });

});