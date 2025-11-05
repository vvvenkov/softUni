import express from 'express'
import handlebars from 'express-handlebars'
import routes from './routes.js';

const app = express();

//Setup static middleware
app.use(express.static('src/public'));

// Use body parser
app.use(express.urlencoded());

// Config handlebars as view engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

// Set handlebars as default view engine 
app.set('view engine', 'hbs');

// Change default views directory
app.set('views', 'src/views');

//Add routes
app.use(routes)

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))