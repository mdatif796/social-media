const express = require('express');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

const db = require('./config/mongoose');

// Use body parser
app.use(express.urlencoded({extended:true}));
// Use cookie parser
app.use(cookieParser());
// set up the static files like css,images
app.use(express.static("public"));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Use express router
app.use('/', require('./routes'));
// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, (err) => {
    if (err) {
        console.log(`Error on connecting port:${port}`);
    } else {
        console.log(`Server is up and running on port:${port}`);
    }
});