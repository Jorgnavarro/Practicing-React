import axios from 'axios';

const urlBase = "https://rickandmortyapi.com/api/character/";

const getAll = (page) =>{
        const request = axios.get(`${urlBase}?page=${page}`);
        return request.then(response => response.data);
}

export default {getAll}