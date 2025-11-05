import express from 'express'
import homeController from './controllers/homeController.js';

const app = express();

//Setup static middleware
app.use(express.static('src/public'));

// Use body parser
app.use(express.urlencoded());

app.use(homeController);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))