import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
const { AuthContext } = require("../../src/auth")
const { PrivateRoute } = require("../../src/router/PrivateRoute")

describe('Pruebas en PrivateRoute', () => { 

    test('debe de mostrar el children si esta autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Cristian'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/search?q=batman');
     });

 })