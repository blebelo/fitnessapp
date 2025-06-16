import axios from "axios";

export const axiosInstance = () => {
    return axios.create({
        baseURL: 'https://body-vault-server-b9ede5286d4c.herokuapp.com/api/',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer token`
    }}) 
    }
;

