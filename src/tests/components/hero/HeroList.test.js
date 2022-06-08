import { shallow } from "enzyme";
import { HeroList } from "../../../components/hero/HeroList";
import { heroes } from "../../../data/heroes";


describe('Pruebas en el <HeroList />', () => {

    const wrapper = shallow(
        <HeroList 
            publisher={ heroes[0].publisher }
        />
    );

    test('Debe mostrarse correctamente', () => { 
        expect( wrapper ) .toMatchSnapshot();
     })
})