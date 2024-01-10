import { useState, forwardRef, useImperativeHandle } from "react";

//para continuar, debemos llamar forwardRef que es la función que envuelve el componente para poder acceder a la referencia asignada forwardRef al agregarla como función debemos envolver todo el componente entre paréntesis forwardRef()


/* eslint-disable react/prop-types */
// eslint-disable-next-line react/display-name
const Togglable = forwardRef( (props, refs) => {
    //Nos tramemos toda la lógica que está comentada en la parte baja del componente LoginForm, para refactorizarla en este componente
    //el estado visible, es el que nos permite setear directamente el valor del estilo directo display, que se ha almacenado en las constantes hide... y show...
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }
    //controlador que maneja el cambio de las constantes, por ende el valor de la propiedad display, la cual tendrá como valor 'none' para ocultar el elemento '' que opera como undefined, al mostrar el valor por defecto, es decir se muestra el elemento
    const toggleVisibility = () => {
        setVisible(!visible)
    }

    //El componente usa el hook useImperativeHandle para que la función toggleVisibility esté disponible fuera del componente
    useImperativeHandle(refs, () => {
        return{
            toggleVisibility
        }
    })
    //En este caso seteamos los elementos, que son dos botones que se mostrarán dependiendo el estado del formulario, para que esto pueda funcionar, en el elemento padre App.jsx, tenemos que envolver el componente LoginForm, para poder hacer uso de props.children
    //la sintaxis en el padre deberá ser: <Togglable><LoginForm/></Togglable>
    //En ese sentido todo lo que se incorpore dentro del componente <Togglable></Togglable> se tratará como props.children, esto se usa para hacer referencia a los componentes hijos del componente.
    //A diferencia de los props normales, React agrega automáticamente children y siempre existe.
    //Cuando un componente tiene una etiqueta con autocierre, significa que props.children será un array vacío <Component/>
    return(
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{ props.buttonLabel }</button>
            </div>
            <div className={props.className} style={showWhenVisible}>
                {props.children}
            </div>
            <div style={showWhenVisible} className='mb-3'>
                <button onClick={toggleVisibility}>Cancel</button>
            </div>
        </div>
    )
})

export default Togglable