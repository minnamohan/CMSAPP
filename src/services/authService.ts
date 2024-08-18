import axios from 'axios';

const API_URL = 'https://localhost:7288';

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
        localStorage.setItem('username', JSON.stringify(response.data));
    }
    return response.data;
};

export const register = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user')!);
};
