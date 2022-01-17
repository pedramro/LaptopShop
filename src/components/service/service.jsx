import axios from "axios";

const apiAdress = 'http://localhost:5000/products/'

export const getProducts = {
    getAllProducts: (x = '') => {
        return axios.get(apiAdress + x)
    },
    getProductById: (id) => {
        return axios.get(apiAdress + id)
    },
    addComment: (id, comment) => {
        axios.post(apiAdress + id + '/comments/', comment)
    },
}