/**
 * @param agregarAlPedido, recibe la función que está seteada en el padre, que nos permite agregar nuevos elementos a un array.
 * @returns un listado de comida en donde cada elemento está  acompañado de un botón, que se puede agregar o renderizar en otro listado
 */


const foodForSelect = ["Hamburguer", "Pizza", "Hot dog", "French fries", "Soda", "Water"]

export function Menu({ agregarAlPedido}) {
    //en la función ubicada en el onClick le estamos enviando al padre la información del elemento seleccionado, para setearlo en el state
    return (
        <div className='container box-menu col-12'>
            <h2 className='body-text'>Order your food here!</h2>
            <ul className='list row'>
                {foodForSelect.map((food, index) => {
                    return <div key={index} className='col'>
                        <li className='body-text element'>
                            {food}
                            <button onClick={()=>agregarAlPedido(food)}>Add</button>
                        </li>
                    </div>
                })}
            </ul>
        </div>
    )
}