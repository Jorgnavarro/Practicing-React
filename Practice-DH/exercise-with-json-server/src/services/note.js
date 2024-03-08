import axios from 'axios'
//después antes de hacer el npm run build, debemos de cambiar la ruta absoluta de nuestro llamado a la API por una relativa, porque el back y el front estarán en una misma dirección.
const baseUrl = '/api/notes'
//Este modulo ahora incluye una variable privada llamada token, su valor se puede cambiar con una función setToken.
//En create(), creamos un objeto más que contiene la configuración del token y la cabecera Authorization.

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () =>{
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create =  async newObject =>{
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = (id, newObject) =>{
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteNote = (id) =>{
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response)
}

export default{
  getAll,
  create,
  update,
  deleteNote,
  setToken
}

