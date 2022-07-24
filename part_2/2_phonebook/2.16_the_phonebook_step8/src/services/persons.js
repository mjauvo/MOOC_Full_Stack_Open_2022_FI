import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// [C] R U D
const createPerson = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
};

// C [R] U D
const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
};

// C R [U] D
const updatePerson = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
};

const personService = { createPerson, getAllPersons, updatePerson };

export default personService;
