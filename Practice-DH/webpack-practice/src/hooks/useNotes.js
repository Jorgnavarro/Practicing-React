import axios from 'axios'
import { useEffect, useState } from 'react'

export const useNotes = (url) => {
    const [notes, setNotes] = useState([])
    

    useEffect(()=> {
        axios.get(url).then(response => {
            setNotes(response.data)
        })
    },[url])

    return notes

}

