import { shallow } from "enzyme";
import { MarvelScreen } from "../../../components/marvel/MarvelScreen";



describe('Pruebas en el componente <MarvelScreen />', () => {

    test('Debe de mostrarse correctamente', () => {

        const wrapper = shallow(<MarvelScreen />);
        expect(wrapper).toMatchSnapshot();
    });
});