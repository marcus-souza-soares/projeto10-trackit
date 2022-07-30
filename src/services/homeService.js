import axios from 'axios';

export async function request(config) {
    const response = await axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
    return response.data;
}