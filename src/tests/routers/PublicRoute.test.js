import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom" ;
import { mount } from "enzyme";
import { PublicRoute } from "../../routers/PublicRoute";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Navigate: () => <h1>Saliendo de aqui</h1>
}))

describe('Pruebas en el <PublicRoute />', () => {

    Storage.prototype.setItem = jest.fn();

    test('Deme de mostrar el componente si no esta autenticado', () => {
        
        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <PublicRoute>
                        <h1>Aqui children del private route</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper.find('h1').text().trim() ).toBe('Aqui children del private route');
    });

    test('Debe de bloquear el componente si esta autenticado', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Marcos'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <PublicRoute>
                        <h1>Aqui children del private route</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html())
        expect(wrapper.text().trim() ).toBe('Saliendo de aqui');
        // al tener solo una etiqueta no hace falta el .find('h1')
    });

});