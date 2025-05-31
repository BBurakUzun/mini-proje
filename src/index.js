const mysql = require('mysql2');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS time', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.send(`DB Time: ${results[0].time}`);
  });
});


app.post('/visitors', (req, res) => {
  db.query('INSERT INTO visitors () VALUES ()', (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Ziyaret kaydedildi!', id: result.insertId });
  });
});


app.get('/visitors', (req, res) => {
  db.query('SELECT * FROM visitors ORDER BY visited_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server şu an aktif http://localhost:${port}`);
});
