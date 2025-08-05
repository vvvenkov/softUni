import { api } from "./requester.js"
import { userUtils } from "../utils/userUtils.js";

const endPoint = {
    register: "http://localhost:3030/users/register",
    login: "http://localhost:3030/users/login",
    logout: "http://localhost:3030/users/logout"
}

async function register(data) { 
    const userData = await api.post(endPoint.register, data);
    return userUtils.setUser(userData);
}
async function login(data) {
    const userData = await api.post(endPoint.login, data);
    return userUtils.setUser(userData);
}
async function logout() {
    await api.get(endPoint.logout);
    return userUtils.clear();
}

export const userService = {
    register,
    login,
    logout
}

