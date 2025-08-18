import page from "../lib/page.js";
import { logout } from "../api/usersApi.js";
import { clearUserData } from "../utils/userUtils.js";

export default async function logoutView(ctx) {
    //check if logged in 


    //make a logout request
    try {
        await logout();

        //Edge case: expired token 
        clearUserData();

        page.redirect('/');
    } catch (err) {
        console.log(err.message)
    }
}