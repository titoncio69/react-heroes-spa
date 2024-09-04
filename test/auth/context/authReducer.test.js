import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";


describe('Pruebas en authReducer', () => { 

    test('debe de retornar el estado por defecto', () => { 
        const newState = authReducer({ logged: false }, {});
        expect( newState ).toEqual({ logged: false });
     });

     test('debe de llamar el login autenticar y establecer el user', () => { 
        const action = {
            type: types.login,
            payload: {
                id:1,
                name:"Cristian"
            }
        };

        const newState = authReducer({ logged: false }, action);
        expect( newState ).toEqual({
            logged: true,
            user: action.payload
        })
      })

    test('debe de borrar el name del usuario y logged en false', () => { 
        const state = {
            logged: true,
            user: {
                id:1,
                name:"Cristian"
            }
        };

        const action = {
            type: types.logout,
        };

        const newState = authReducer(state, action);

        expect( newState ).toEqual({ logged: false });
     })
 })
