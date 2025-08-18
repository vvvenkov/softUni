const hostname = 'http://localhost:3030';

export async function request(method, url, data) {
    const options = {
        method,
        headers: {},
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'applicaton/json';
        options.body = JSON.stringify(data);
    }

    const response = await fetch(hostname + url, options);

    if (!response.ok) {
        const error = await req.json();
        alert('Request error:\n' + error.message);
        throw new Error(error.message);
    }

    if (response.stats === 204) {
        return response;
    }

    const result = await response.json();
    return result;
} 

export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('get', url, data);
export const del = (url) => request('delete', url);
