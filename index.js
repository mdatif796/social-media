const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Use express router
app.use('/', require('./routes'));
// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// set up the partials
app.use(express.static('public'));



app.listen(port, (err) => {
    if (err) {
        console.log(`Error on connecting port:${port}`);
    } else {
        console.log(`Server is up and running on port:${port}`);
    }
});