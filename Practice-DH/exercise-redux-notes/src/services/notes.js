import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNewNote = async (newObject) => {
    const response = await axios.post(baseUrl, newObject)
    console.log(response.data)
    return response.data
}

export default { getAll, createNewNote } 