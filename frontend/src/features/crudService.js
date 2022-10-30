import axios from 'axios'
const API_URL = '/api/items/'

//New crud
const createCrud = async (crudData) => {
    const response = await axios.post(API_URL, crudData)
    return response.data
}

const crudService = {
    createCrud
}

export default crudService