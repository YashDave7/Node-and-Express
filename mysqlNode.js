const express = require('express');
const mysql = require('mysql');

const app = express();

// CREATE CONNECTION.
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

// CONNECTING.
db.connect((err) => {
    if(err) {
        throw err; 
    }
    console.log('Database Connected!!!');
});

// CREATING DATABASE USING NODE COMMANDS.   (NOT RECOMMENDED)
app.get('/createDB', (req, res) => {
    let sql = 'CREATE DATABASE node';
    db.query(sql, (err, res) => {
        if(err) throw err;
        res.send('Database Created');
    });
});


// CREATING TABLE USING NODE COMMANDS.  (NOT RECOMMENDED)
app.get('/createTable', (req, res) => {
    let sql = 'CREATE TABLE table1(id int(20) AUTO_INCREMENT, title VARCHAR(200), body VARCHAR(500), PRIMARY KEY(id))';
    db.query(sql, (err, res) => {
        if(err) throw err;
        res.send('table table1 Created');
    });
});


// INSERTING INTO TABLE USING NODE COMMANDS.  (NOT RECOMMENDED)
app.get('/insertIntoTable', (req, res) => {
    let insert = { title: 'First', body: 'This is first body'};
    let sql = 'INSERT INTO table1 SET ?';
    db.query(sql, insert, (err, res) => {
        if(err) throw err;
        res.send('Inserted into table1.');
    });
});

// SELECT FROM A TABLE.
app.get('/SelectFromTable', (req, res) => {
    let sql = 'SELECT * FROM table1';
    db.query(sql, (err, res) => {
        if(err) throw err;
        console.log(res);
        // res.send('Select command executed');
    });
});

app.listen('8000', ()=> {
    console.log('Server listening on port 8000....');
});

