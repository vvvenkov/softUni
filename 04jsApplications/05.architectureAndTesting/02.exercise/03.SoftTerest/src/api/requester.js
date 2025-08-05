import { userUtils } from "../utils/userUtils.js";

async function requester(method, endPoint, data) {

    const userData = userUtils().getUser();

    const option = {
        method,
        headers: {}
    };

    if (userData) {
        option.headers["X-Authorization"] = userData.accessToken;
    }

    if (data) {
        option.headers["Content-Type"] = "application/json"
        option.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(endPoint, option);
        if (!response.ok) {
            if (response.status === 403) {
                userUtils.clear();
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status === 204) {
            return response;
        }
        return response.json();
    } catch (error) {
        alert(error)
    }
    return response.json();
}

async function get(endPoint) {
    return requester("GET", endPoint);
}
async function post(endPoint, data) {
    return requester("POST", endPoint, data);
}
async function put(endPoint, data) {
    return requester("PUT", endPoint, data);
}
async function del(endPoint) {
    return requester("DELETE", endPoint);
}

export const api = {
    get,
    post,
    put,
    del
};
