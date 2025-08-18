import { getUserData } from "../utils/userUtils.js";

export const request = async (method, url, data) => {
    const { accessToken } = getUserData();
    let requestOptions = {};

    if (data) {
        requestOptions.headers = {
            'Content-Type': 'application/json',
        };

        requestOptions.body = JSON.stringify(data);
    }

    if (accessToken) {
        requestOptions.headers = {
            ...requestOptions.headers,
            'X-Authorization': accessToken,
        }
    }

    if (method !== 'GET') {
        requestOptions.method = method;
    }

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
        throw response.json();
    }

    if (response.status === 204) {
        return;      //if the response is empty (not content error)
    }

    const result = await response.json();

    return result;
}