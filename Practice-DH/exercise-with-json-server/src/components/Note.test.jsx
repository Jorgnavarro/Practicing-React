
import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { expect, test } from "vitest";


import { Note } from "./Note"

//nos traemos el expect y el test, desde vitest
//con test iniciamos nuestra primera prueba, que recibe el nombre de la misma y un callback


test('renders content', () => {
    const note = {
        content: 'Component testing is done with react-testing-library',
        important: true
    }

    //Con el método render proporcionado por la libreria react-testing-library, el método usado para renderizar implementa un formato que es adecuado para prueba sin que se tenga que usar el DOM
    //render devuelve un objeto que tiene varias propiedades. Una de las propiedades se llama container y contiene todo el HTML renderizado por el componente
    const component = render(
        <Note note={note} />
    )

    //En el expect, verificamos que el componente muestre el texto correcto, que en este caso es el contenido de la nota
    //method 1
    expect(component.container).toHaveTextContent('Component testing is done with react-testing-library')

    //method 2
    const element = component.getByText(
        'Component testing is done with react-testing-library'
    )
    expect(element).toBeDefined()

    //method 3
    const div = component.container.querySelector('.note')

    expect(div).toHaveTextContent(
        'Component testing is done with react-testing-library'
    )
    
})

//en el method 1, usa el método toHaveTextContent para buscar un texto coincidente de todo el código HTML renderizado por el componente. toHaveTextContent es uno de los muchos métodos de "emparejamiento" que proporciona la biblioteca jest-dom.

//en el method 2, La segunda forma utiliza el método getByText del objeto devuelto por el método render. El método devuelve el elemento que contiene el texto dado. Se produce una excepción si no existe tal elemento. Por esta razón, técnicamente no necesitaríamos especificar ninguna expectativa adicional.

//en el method 3, La tercera forma es buscar un elemento específico que el componente representa con el método querySelector que recibe un Selector de CSS como parámetro.