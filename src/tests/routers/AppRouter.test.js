import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";


describe('Pruebas en el <AppRouter />', () => {
    
    test('Debe de mostrar el login si no esta autenticado', () => {
        
        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('Login');
    });

    test('Debe de mostrar el componente de MarvelScreen si esta autenticado', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'German'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue } >
                <AppRouter />
            </AuthContext.Provider>
        );


        // console.log( wrapper.find('span').text());
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').exists() ).toBe( true );
        expect( wrapper.find('span').text() ).toBe( contextValue.user.name );
    });
});