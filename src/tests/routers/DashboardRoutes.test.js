import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en el <DashboardRoutes />', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Pepe'
        }
    }

    test('Debe de mosrarse correctamente - /marvel', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        // console.log(wrapper.html());
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim()).toBe('Pepe');
        expect( wrapper.find('h1').text().trim()).toBe('MarvelScreen');
    });

    test('Debe de mosrarse correctamente - DC', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        // console.log(wrapper.html());
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim()).toBe('DcScreen');
    });
});