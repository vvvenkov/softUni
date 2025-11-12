import bcrypt from 'bcrypt'

import User from "../models/User.js"
import { generateAuthToken } from "../utils/userUtils.js";

export default {
    async register(userData) {
        // Check if passwords are the same 
        if (userData.password !== userData.rePassword) {
            throw new Error('Password Missmatch!')
        }

        //Check if user exists
        const user = await User.findOne({ email: userData.email });

        if (user) {
            throw new Error('User already exists!')
        }

        const newUser = await User.create(userData);
        const token = await generateAuthToken(newUser);

        return token;

    },
    async login(username, password) {
        const user = await User.findOne({ email })

        //validate user 
        if (!user) {
            throw new Error('Ivalid email or Password!');
        }

        //validate password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Ivalid email or Password!')
        }

        //generate token
        const token = await generateAuthToken(user);

        return token;
    }
}

