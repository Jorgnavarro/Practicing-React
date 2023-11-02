import React from 'react'
import { useContext } from 'react'
import { TheBagContext } from '../context/theBagContext'



export const TheBag = () => {
    const { value, handleChange, bag, addAppleFirst, addBananaEnd, addToEndElement, addToStartElement, deleteFirstElement, deleteLastElement, resetBag } = useContext(TheBagContext);

    return (
        <div className='container_bag'>
            <div className='container_input'>
                <h4>Random List</h4>
                <input type='string' value={value} onChange={handleChange} placeholder="Write an element..." />
            </div>
            <div className='container_btns'>
                <button onClick={addAppleFirst}>Add apple to start</button>
                <button onClick={addBananaEnd}>Add banana to the end</button>
                <button onClick={addToStartElement}>Add element from input to the start</button>
                <button onClick={addToEndElement}>Add element from input to the end</button>
                <button onClick={deleteFirstElement}>Delete first element</button>
                <button onClick={deleteLastElement}>Delete the last element</button>
                <button onClick={resetBag}>Reset</button>
            </div>
            <div className='container_elements'>
                {bag.map((item) => (
                    <div key={item.id}>{item.value}</div>
                ))}
            </div>
        </div>
    )
}
