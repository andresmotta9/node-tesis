const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./register');

const connection = mysql.createConnection({
  host     : 'us-cdbr-east-05.cleardb.net',
  user     : 'b62ba68668ea1c',
  password : '4d0579fe',
  database : 'heroku_851e4397b87123b'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});