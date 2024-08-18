import axios from 'axios';
import { Customer } from '../types';

const API_URL = 'https://localhost:7288/api'; // Replace with actual API URL

export const getCustomers = async () => {
    const response = await axios.get(`${API_URL}/Customer`);
    return response.data;
};

export const getCustomer = async (id: string) => {
    const response = await axios.get(`${API_URL}/Customer/${id}`);
    return response.data;
};

export const createCustomer = async (customer: any) => {
    const response = await axios.post(`${API_URL}/Customer`, customer);
    return response.data;
};

export const updateCustomer = async (id: string, customer: any) => {
    const response = await axios.put(`${API_URL}/Customer/${id}`, customer);
    return response.data;
};

export const deleteCustomer = async (id: string) => {
    const response = await axios.delete(`${API_URL}/Customer/${id}`);
    return response.data;
};