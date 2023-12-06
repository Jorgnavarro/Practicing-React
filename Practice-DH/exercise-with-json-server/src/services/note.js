import axios from "axios";
//después antes de hacer el npm run build, debemos de cambiar la ruta absoluta de nuestro llamado a la API por una relativa, porque el back y el front estarán en una misma dirección.
const baseUrl = '/api/notes';

const getAll = () =>{
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = newObject =>{
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
}

const update = (id, newObject) =>{
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data);
}

const deleteNote = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response);
}

export default{
    getAll,
    create,
    update,
    deleteNote
}

