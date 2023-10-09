import axios from 'axios';

const urlBase = "https://rickandmortyapi.com/api/character/";

const getAll = () =>{
        const request = axios.get(urlBase);
        return request.then(response => response.data);
}

export default {getAll}