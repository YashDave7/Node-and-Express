const express = require('express');
const app = express();

const path = require('path');

// setup static and middleware. --> for serving all the static assets.
app.use(express.static('./public'));

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname,'./example-app/index.html'));
});

app.all('*', (req, res) => {
    res.status(404).send('Page Not found');
});

app.listen(8000, ()=> {
    console.log('Server is listening to port 8000....');
});