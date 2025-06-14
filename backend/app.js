const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection ({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

app.use('/auth',require('./routes/authroute'));
// app.use('/upload',require('./routes/uploadroute'));

db.connect((error) => {
    if (error) {
        console.log(error.message);
    }else {
        console.log('Database connected successfully');
    }
})

const port = 3060;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }else {
        console.log(`Server has started at ${port}`);
    }
});