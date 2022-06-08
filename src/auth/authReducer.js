import { types } from "../types/types";

// const state = {
//     name: 'Marcos',
//     logged: true
// };

// const action = {
//     type: type.login,
//     payload: {
//         name: 'Marcos',
//         email: 'marcos@gmail.com',
//     },
// };

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload, // = name: action.payload.name
                logged: true
            }
        
        case types.logout:
            return {
                logged: false
            };
    
        default:
            return state;
    }
};