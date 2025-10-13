import express from 'express'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

const users = [];
const jwtSecret = 'MYSECRETSECRET';

const app = express();

app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressSession({
    secret: 'osdiafh8349afhifhaklf4kasjhfkhaseuikfhasueheuf',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false }
}))

app.get('/', (req, res) => {
    // Set Cookie (HTTP Style)
    // res.writeHead(200, {
    //     'set-cookie': 'propName=value'
    // });
    // res.write(`
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8" />
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //         <title>Authentication Demo</title>
    //     </head>
    //     <body>
    //         <nav>
    //             <ul>
    //                 <li><a href="/">Home</a></li>
    //                 <li><a href="/profile">Profile</a></li>
    //                 <li><a href="/login">Login</a></li>
    //                 <li><a href="/register">Register</a></li>
    //             </ul>
    //         </nav>
    //         <h1>Home Page</h1>
    //     </body>
    //     </html>
    // `);
    // res.end();

    // Set cookie using cookie parser
    res.cookie('cookieName', 'cookieValue', { httpOnly: true });
    res.send(`
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <title>Authentication Demo</title>
         </head>
         <body>
             <nav>
                 <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/profile">Profile</a></li>
                     <li><a href="/login">Login</a></li>
                     <li><a href="/register">Register</a></li>
                     <li><a href="/admin">Admin</a></li>
                 </ul>
             </nav>
             <h1>Home Page</h1>
         </body>
         </html>
     `)
});

app.get('/profile', (req, res) => {
    // Read cookie (HTTP Style)
    // console.log(req.headers['cookie']);

    // Read cookie using cookie parser
    console.log(req.cookies);

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Authentication Demo</title>
        </head>
        <body>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                     <li><a href="/admin">Admin</a></li>
                </ul>
            </nav>
            <h1>Profile Page</h1>
        </body>
        </html>
    `);
});

app.get('/set-session', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 10);
    req.session.randomNumber = randomNumber;

    res.send(`Your number is ${randomNumber}`);
});

app.get('/get-session', (req, res) => {
    console.log(req.session);

    const randomNumber = req.session.randomNumber;

    res.send(`Your number is ${randomNumber} (get session)`);
});

app.get('/register', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Register</title>
        </head>
        <body>
        
             <nav>
                 <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/profile">Profile</a></li>
                     <li><a href="/login">Login</a></li>
                     <li><a href="/register">Register</a></li>
                     <li><a href="/admin">Admin</a></li>
                 </ul>
             </nav>

            <h1>Register Page</h1>

            <form action="/register" method="POST">
                <div>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </body>
        </html>
    `);
});

app.post('/register', (req, res) => {
    // GET Register info from post data
    const { username, password } = req.body;

    console.log(username);
    console.log(password);

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    users.push({
        username,
        password: hashedPassword
    });

    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login</title>
        </head>
        <body>
        
             <nav>
                 <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/profile">Profile</a></li>
                     <li><a href="/login">Login</a></li>
                     <li><a href="/register">Register</a></li>
                     <li><a href="/admin">Admin</a></li>
                 </ul>
             </nav>

            <h1>Login Page</h1>

            <form action="/login" method="POST">
                <div>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </body>
        </html>
    `);
});

app.post('/login', (req, res) => {
    console.log(users);

    // TODO: Get login password
    const { username, password } = req.body;

    // TODO: Get user object 
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.send('No such user');
    }

    // TODO: Compare login password with register hashedPassword
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) {
        return res.send('Invalid password');
    }

    // TODO: Generate jsonwebtoken
    const payload = {
        username,
        role: username === 'pesho' ? 'User' : 'Admin'
    };
    const token = jsonwebtoken.sign(payload, jwtSecret, { expiresIn: '2h' });

    // TODO: Add token to cookie
    res.cookie('auth', token, { httpOnly: true});

    res.send(`Welcome ${user.username}`);
});

app.get('/admin', (req, res) => {
    // TODO: Get token from request cookie 
    const token = req.cookies['auth'];

    if (!token) {
        return res.status(401).send('Unauthorized Access | You are not logged in');
    }

    // TODO: Validate token
    try {
        const decodedToken = jsonwebtoken.verify(token, jwtSecret);

        // TODO: Check if admin
        if (decodedToken.role !== 'Admin') {
            return res.status(403).send('You dont have necessary access!');
        }

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                
             <nav>
                 <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/profile">Profile</a></li>
                     <li><a href="/login">Login</a></li>
                     <li><a href="/register">Register</a></li>
                     <li><a href="/admin">Admin</a></li>
                 </ul>
             </nav>

             <h1>Welcome to Admin Page ${decodedToken.username}</h1>
            </body>
            </html>
        `)
    } catch (err) {
        res.clearCookie('auth');
        res.status(401).send('Invalid Token');
    }
});

app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));

