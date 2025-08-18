import { api } from "../requester.js";

const BASE_URL = 'http://localhost:3030';
const endpoints = {
    login: '/users/login',
    logout: '/users/logout',
    register: '/users/register',
};

async function login() {
    return await api.post(BASE_URL + endpoints.login, data);
}
async function register() {
    return await api.post(BASE_URL + endpoints.register, data);
}
async function logout() {
    return await api.get(BASE_URL + endpoints.logout);
}

export const userService = {
    login,
    register,
    logout
}
