import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('user/register')
});

userController.post('/register', async (req, res) => {
    const userData = req.body;

    const token = await userService.register(userData);

    //Attach token to cookie
    res.cookie('auth', token)

    // Redirect to home page
    res.redirect('/');
});

userController.get('/login', (req, res) => {
    res.render('user/login')
});

userController.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Call userService.login
    const token = await userService.login(username, password)

    //Attach token to cookie
    res.cookie('auth', token);

    //Redirect
    res.redirect('/')

});

userController.get('/logout', (req, res) => {
    res.clearCookie('auth');

    //regularly you ned invalidation of the token

    res.redirect('/');
});

export default userController;