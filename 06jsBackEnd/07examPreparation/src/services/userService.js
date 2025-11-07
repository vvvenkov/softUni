import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from 'bcrypt'

import User from "../models/User.js"
import { JWT_SECRET } from "../config/index.js";

export default {
    async register(userData) {
        // Check if passwords are the same 
        if (userData.password !== userData.rePassword) {
            throw new Error('Password Missmatch!')
        }

        //Check if user exists
        const user = await User.findOne({ username: userData.username });

        if (user) {
            throw new Error('User already exists!')
        }

        return User.create(userData)
    },
    async login(username, password) {
        const user = await User.findOne({ username })

        //validate user 
        if (!user) {
            throw new Error('Ivalid username or Password!');
        }

        //validate password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Ivalid username or Password!')
        }

        //generate token
        const payload = {
            id: user.id,
            username,
        }

        const token = jsonwebtoken.sign(payload, JWT_SECRET, { expiredIn: '2h' });
    }
}