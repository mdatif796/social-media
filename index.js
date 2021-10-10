require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

const db = require('./config/mongoose');

// require for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

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


// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'social',
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Use express router
app.use('/', require('./routes'));

app.listen(port, (err) => {
    if (err) {
        console.log(`Error on connecting port:${port}`);
    } else {
        console.log(`Server is up and running on port:${port}`);
    }
});