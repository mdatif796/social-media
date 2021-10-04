const express = require('express');

const app = express();
const port = 3000;

// connecting it with routes
app.use('/', require('./routes'));



app.listen(port, (err) => {
    if (err) {
        console.log(`Error on connecting port:${port}`);
    } else {
        console.log(`Server is up and running on port:${port}`);
    }
});