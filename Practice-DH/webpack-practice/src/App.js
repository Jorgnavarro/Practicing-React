import React, { useState } from 'react'
import { useNotes } from './hooks/useNotes'

const App = () => {
    const [counter, setCounter] = useState(0)
    const [values, setValues] = useState([])
    const url = 'http://localhost:3001/notes'
    const notes = useNotes(url)

    const handleClick = () => {
        setCounter(counter + 1)
        setValues(values.concat(counter))
    }
    return (
        <div className='container'>
            Hello webpack {counter} clicks
            <button onClick={handleClick}>
                press this button
            </button>
            <div>{notes.length} notes on server {url}</div>
        </div>
    )
}

export default App