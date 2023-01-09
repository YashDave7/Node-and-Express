// route parameters --> used to get a specific data from API.

const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.status(200).send('HIIIIII');
    res.end();
});
app.get('/about', (req, res)=> {
    res.status(200).send('HIIIIII About');
    res.end();
});
app.get('/contact', (req, res)=> {
    res.status(200).send('HIIIIII Contact');
    res.end();
});


app.listen(8000, () => {
    console.log("Server listening on port 8000....");
});