import axios from "axios";
const baseURL = 'https://trello-back.shpp.me/asadov/api/v1/';

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123'
    },
});
  
instance.interceptors.response.use((res) => res.data);

export async function fetchData(url) {
    return await instance.get(url);
}
