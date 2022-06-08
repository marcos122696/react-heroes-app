import { heroes } from "../data/heroes"



export const getHeroById = ( id ) => {
    // console.log('getherobyid called');
    return heroes.find( hero => hero.id === id );
}
