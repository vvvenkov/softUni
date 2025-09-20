import express from 'express';
import handlebars from 'express-handlebars';

const contacts = [
    { name: 'Ivaylo Papazov', phone: '0883948752' },
    { name: 'Pesho Petrov', phone: '0885248752' },
    { name: 'Ivan Ivanov', phone: '0885211352' },
    { name: 'Gosho Goshev', phone: '0885211123' },
];

const app = express();

app.use(express.urlencoded());

// Add handlebars view engine
app.engine('hbs', handlebars.engine({ extname: 'hbs' }))

// Set default view engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { title: 'Hello from Handlebars!!!', pageTitle: 'Home' });
});

app.get('/home', (req, res) => {
    res.render('home', { title: 'Home page', pageTitle: 'Home2' })
});

app.get('/contacts', (req, res) => {

    res.render('contacts', { contacts, subtitle: 'Favourites', pageTitle: 'Contacts' });
});

app.get('/contacts/add', (req, res) => {
    res.render('addContact');
});

app.post('/contacts/add', (req, res) => {
    contacts.push(req.body);

    res.redirect('/contacts');
});

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));
