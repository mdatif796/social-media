const express = require('express');

const app = express();
const port = 3000;

app.listen(port, (err) => {
    if (err) {
        console.log(`Error on connecting port:${port}`);
    } else {
        console.log(`Server is up and running on port:${port}`);
    }
});