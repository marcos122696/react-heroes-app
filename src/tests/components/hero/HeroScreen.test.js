import { mount } from "enzyme";
import { HeroScreen } from "../../../components/hero/HeroScreen";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en el <HeroScreen />', () => {

    test('No debe de mostrar el HeroScreen si no hay un heroe en el URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={<h1>No Hero Page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect( wrapper.find('h1').text().trim() ).toBe('No Hero Page');
    });

    test('No debe de mostrar el hero si existe el argumento', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/Hero/marvel-spider']}>
                <Routes>
                    <Route path="hero/:heroeId" element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h3').text().trim() ).toBe('Spider Man');
        expect( wrapper.find('.row').exists() ).toBe(true);
    });
    
    test('Debe de regresar a la pantalla anterior', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/Hero/marvel-spider']}>
                <Routes>
                    <Route path="hero/:heroeId" element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click');
        expect( mockNavigate ).toHaveBeenCalledWith( -1 );
    });

    // test('Debe de mostrar el "No Hero Page" si no tenemos un heroe', () => {

    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={ ['hero/marvel-spider121315685']}>
    //             <Routes>
    //                 <Route path="hero/:heroeId" element={<HeroScreen />} />
    //                 <Route path="/" element={<h1>No Hero Page</h1>} />
    //             </Routes>
    //         </MemoryRouter>
    //     )

        // expect( wrapper.find('h1').text().trim() ).toBe('No Hero Page');
    // });
});