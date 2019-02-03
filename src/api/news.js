import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        Authorization: 'Bearer 2fd8c5d40a5a4c04972a06f0bb20c9af'
    },
});