import express from 'express';
import handlebars from 'express-handlebars';


import routes from './routes.js';
import initDatabase from './config/dbConfig.js';
import cookieParser from 'cookie-parser';
import { auth } from './middlewares/authMiddleware.js';
import helpers from './views/helpers.js';

// Init express();
const app = express();

// Init database
await initDatabase();

//Setup static middleware
app.use(express.static('src/public'));

// User cookie-pasrser
app.use(cookieParser());

// Use body parser
app.use(express.urlencoded());

//Use auth middleware
app.use(auth);

// Config handlebars as view engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    },
    helpers: helpers,
}));

// Set handlebars as default view engine 
app.set('view engine', 'hbs');

// Change default views directory
app.set('views', 'src/views');

// User auth middleware
app.use(auth);

//Add routes
app.use(routes)

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))