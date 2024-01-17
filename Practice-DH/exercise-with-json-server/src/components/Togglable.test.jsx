import '@testing-library/jest-dom'
import { render, fireEvent } from "@testing-library/react"
import Togglable from "./Togglable";
import { describe, expect, test, beforeEach } from 'vitest'

//Para pruebas en el componente real en Togglable.jsx se agregó el nombre de la clase "togglableContent" al div que envuelve a children, es decir a los componentes secundarios

describe('<Togglable/>', () => {
    let component

    //beforeEach se llama antes de cada prueba, que luego convierte el componente Togglable en la variable component

    beforeEach(()=>{
        component = render(
            <Togglable buttonLabel="show...">
                <div className="testDiv"/>
            </Togglable>
        )
    })

    //Esta prueba verifica que el componente Togglable representa su componente hijo <div className="testDiv"/>
    test('renders its children', () => {
        expect(
        component.container.querySelector('.testDiv')
        ).toBeDefined()
    })

    //Las pruebas restantes utilizan el método toHaveStyle para verificar que el componente secundario del componente Togglable no es visible inicialmente, comprobando que el estilo del elemento div contiene { display: 'none' }.
    

    test('at start the children are not displayed', () => {
        const div = component.container.querySelector('.togglableContentTest')
        
        expect(div).toHaveStyle('display: none')
    })

    //Otra prueba verifica que cuando se presiona el botón, el componente es visible, lo que significa que el estilo para ocultar el componente ya no está asignado al componente.

    //El btn se busca una vez más según el texto que contiene. El botón podría haberse ubicado también con la ayuda de un selector de CSS.

    test('after clicking the button, children are displayed', () => {
        const btn = component.getByText('show...')
        fireEvent.click(btn)

        const div = component.container.querySelector('.togglableContentTest')

        expect(div).not.toHaveStyle('display: none')
    })

    //Prueba que se utiliza para verificar que el contenido visible se puede ocultar haciendo clic en el segundo btn del componente

    test('toggled content can be closed', () => {
        const btn = component.container.querySelector('button')
        fireEvent.click(btn)

        //Definimos un selector que devuelve el segundo btn button:nth-child(2) pero no es una buena práctica depender del orden de los botones en el componente, y se recomienda buscar los elementos en función de su texto

        // const closeBtn = component.container.querySelector(
        //     'button:nth-child(2)'
        // )
        
        const closeBtn = component.getByText('Cancel')

        fireEvent.click(closeBtn)

        const div = component.container.querySelector('.togglableContentTest')

        expect(div).toHaveStyle('display: none')
    })

});
