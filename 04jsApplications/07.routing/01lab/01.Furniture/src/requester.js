import { userHelper } from './utility/userHelper.js';

async function requester(method, url, data) {

    const option = {
        method,
        headers: {},
    }

    const accessToken = userHelper.getUserToken(); //to add this func 

    if (accessToken) {
        option.headers[`x-authorization`] = accessToken;
    }

    if (data) {
        option.headers['Content-Type'] = 'application/json'
        option.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, option);

        return await response.json();
    } catch (error) {
        alert(error.message); 
    }
}
async function get(url) {
    return requester('GET', url);
}
async function post(url) {
    return requester('POST', url, data);
}
async function put(url) {
    return requester('PUT', url, data);

}
async function del(url) {
    return requester('DELETE', url)
}

export const api = {
    get, post, put, del
}

