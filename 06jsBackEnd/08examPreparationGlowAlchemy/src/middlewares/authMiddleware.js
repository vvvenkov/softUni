import { AUTH_COOKIE_NAME, JWT_SECRET } from "../config/index.js";
import jsonwebtoken from "../lib/jsonwebtoken.js";

export function auth(req, res, next) {
    const token = req.cookies[AUTH_COOKIE_NAME];


    //Check if guest
    if (!token) {
        return next();
    }


    try {
        const user = jsonwebtoken.verify(token, JWT_SECRET);

        req.user = user;
        req.isAuthenticated = true;
        res.locals.user = user;
        res.locals.isAuthenticated = true;

        next();
    } catch (err) {
        res.clearCookie('AUTH_COOKIE_NAME');

        res.redirect('/user/login');
    }
}

export function isAuth(req, res, next) {
    if (!req.isAuthenticated) {
        res.redirect('/user/login')
    }

    next();
}

export function isGuest(req, res, next) {
    if (req.isAuthenticated) {
        return res.redirect('/');
    }

    next();
}