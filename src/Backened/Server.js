const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // apna actual MySQL password yahan likho
  database: 'signup'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/signup', (req, res) => {
  const sql = 'INSERT INTO login (name, email, password) VALUES (?, ?, ?)';
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("DB Error:", err);
      return res.json("Error");
    } else {
      return res.json(data);
    }
  });
});

app.post('/login', (req, res) => {
  const sql = 'select * from login where `email` = ? AND `password` = ? ';

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error("DB Error:", err);
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});


app.listen(8081, () => {
  console.log('Server running on port 8081');
});

