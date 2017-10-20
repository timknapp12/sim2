const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require("massive");
const ctrl = require('./controllers/controller.js');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING ).then (db => app.set('db', db));

app.use(session({
    secret: 'kdjdjdkkf kdkdkkdskakdivk',
    resave: false,
    saveUnitialized: true
}));



app.post('/api/users', ctrl.register);








const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));