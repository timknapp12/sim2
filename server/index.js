const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const session = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: 'kdjdjdkkf kdkdkkdskakdivk',
    resave: false,
    saveUnitialized: false
}));













app.listen(port, () => console.log(`listening on port ${port}`));