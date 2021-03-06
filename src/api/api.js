import axios from "axios";
// const baseURL = 'https://trello-back.shpp.me/asadov/api/v1/';
import { api } from '../common/constants';

console.log(api.baseURL);
const instance = axios.create({
    baseURL: api.baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123'
    },
});

instance.interceptors.response.use((res) => res.data);

export async function fetchDataAPI(url) {
    return await instance.get(url);
}

export async function fetchPostDataAPI({url, data}) {
    return await instance.post(url, data);
}

export async function fetchPutDataAPI({url, data}) {
    return await instance.put(url, data);
}

export async function fetchDelDataAPI({url}) {
    return await instance.delete(url);
}
