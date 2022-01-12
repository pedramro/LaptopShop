import axios from "axios";

const apiAdress = 'http://localhost:5000/products/'

export const getProducts = {
    getAllProducts: () => {
        return axios.get(apiAdress)
    },
    getProductById: (id) => {
        return axios.get(apiAdress + id)
    }
}