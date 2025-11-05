import express, { Router } from 'express'
import routes from './routes.js';

const app = express();

//Setup static middleware
app.use(express.static('src/public'));

// Use body parser
app.use(express.urlencoded());

//ADd coutes
app.use(routes)


app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))