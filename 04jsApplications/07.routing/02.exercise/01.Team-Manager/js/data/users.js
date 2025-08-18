import { saveUserData } from '../utils.js';
import { post } from './api.js'

export async function login(email, password) {
    const result = await post(email, password);

   
    saveUserData(result);

}