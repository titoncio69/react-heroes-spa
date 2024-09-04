import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes"

// jest.mock('query-string', () => ({
//     parse: jest.fn(() => ({ foo: 'bar', abc: 'xyz' })),
//     stringify: jest.fn(),
//     // Add other methods you need to mock here
//   }));
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en SearchPage', () => { 

    beforeEach(() => jest.clearAllMocks());
    
    test('debe de mostrar correctamente con valores por defecto', () => { 
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();
        // screen.debug();
     })
    
    test('debe de mostrar a batman y el input con el valor del queryString', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');
        
        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');
        
        const alertDanger = screen.getByLabelText('alert-danger');
        expect( alertDanger.style.display ).toBe('none');
        // screen.debug();
     })

     test('debe de mostrar si no se encuntra el heroe', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('');
        // screen.debug();

      })

    test('debe ede llamar el navigate a la pantalla nueva', () => { 

        const inputValue = 'superman';
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {name: 'searchText', value: inputValue}})
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`)

     })

 })