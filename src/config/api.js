import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'token': localStorage.getItem('token_organizze')
    }
});

export default api;