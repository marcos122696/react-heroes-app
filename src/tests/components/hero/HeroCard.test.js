import { shallow } from "enzyme";
import { HeroCard } from "../../../components/hero/HeroCard";
import { heroes } from "../../../data/heroes";


describe('Pruebas en el <HeroCard />', () => {

    const wrapper = shallow(
        <HeroCard
            id={ heroes[0].id }
            superhero={ heroes[0].superhero }
            alter_ego={ heroes[0].alter_ego }
            first_appearance={ heroes[0].first_appearance }
        />
    );


    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de haber un h5 con el nombre de Batman', () => {

        expect( wrapper.find('h5').text().trim() ).toBe( 'Batman' );
    });


    test('Debe de aparecer la primera etiqueta "p" con el alter_ego Bruce Wayne', () => {

        expect( wrapper.find('p').at(0).text().trim() ).toBe( 'Bruce Wayne' );
    });

    
    test('Debe de aparecer la primera segunda "p" con el first_appearance Detective Comics #27', () => {

        expect( wrapper.find('p').at(1).text().trim() ).toBe( 'Detective Comics #27' );
    });
});