const express = require('express');
const app = express();

// ++++++++++ SOME COMMON COMMANDS. ++++++++
// app.get  --> to red data from server.
// app.post --> to upload some data to the server.
// app.put
// app.delete
// app.all  --> for all type of request.
// app.use
// app.listen   --> for listening the port.


app.get('/', (req, res) => {
    console.log('User hit the homePage.');
    res.status(200).send('Home Page !!!');
    res.end();
});

app.get('/about', (req, res) => {
    console.log('User hit the AboutPage');
    res.status(200).send('About Page!!!');
    res.end();
});

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
    res.end();
});

app.listen(8000, () => {
    console.log("Server is listening at port 8000...");
});