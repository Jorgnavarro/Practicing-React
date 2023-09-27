/**
 * @param agregarAlPedido, recibe la función que está seteada en el padre, que nos permite agregar nuevos elementos a un array.
 * @returns un listado de comida en donde cada elemento está  acompañado de un botón, que se puede agregar o renderizar en otro listado
 */
import { useState } from "react";
import { message } from "antd";

const foodForSelect = ["Hamburguer", "Pizza", "Hot dog", "French fries", "Chiken nuggets", "Wings"]
const initialValues = {
    name: "",
    select: foodForSelect[0],
}

export function Menu({ agregarAlPedido }) {
    // const [inputValue, setInputValue] = useState(initialValues.name);
    // const [selectValue, setSelectValue] = useState(initialValues.select);

    const [formValues, setFormValues] = useState(initialValues)


    function handleFormSubmit(e) {
        e.preventDefault()
        //en esta línea indicamos que si se presenta cambio en alguno de los dos sea input o el select, que los agregue al pedido
        agregarAlPedido(formValues.name||formValues.select);
        setFormValues(initialValues.name);
        message.info("Order ready!!")
    }

    function handleInputChange(e) {
        console.log(e.target.name, e.target.value);
        const newFormValues = { ...formValues};
        newFormValues[e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }
    return (
        <div className='container box-menu col-12'>
            <form onSubmit={handleFormSubmit}>
                {/*Input order food */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="order-here" className="col-form-label">
                            <h2 className="text-order">Order your food here:</h2>
                        </label>
                    </div>
                    <div className="col-auto">
                        <input name="name" type="text" id="order-here" className="form-control" onChange={handleInputChange} value={formValues.name} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
                {/*Select */}
                <select name="select" className="form-select" aria-label="Default select example" onChange={handleInputChange} value={formValues.select}>
                    {foodForSelect.map(menu =>{
                        return(
                            <option key={menu} value={menu}>{menu}
                            </option>
                        )
                    })
                    }
                </select>
                
            </form>
        </div>
    )
}