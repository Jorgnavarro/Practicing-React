import axios from 'axios';

const baseUrl = '/api/login'

//Hacemos la peteción al back, en caso de ser exitosa retonará el token

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { login }