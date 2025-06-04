// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'info'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// Register endpoint
app.post('/register', (req, res) => {
  const { name, birthdate, email, password } = req.body;
  const sql = 'INSERT INTO users_info (name, birthdate, email, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, birthdate, email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Registration failed');
    }
    res.send('User registered successfully');
  });
});


//login 
app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).json({ success: false, message: "name and password required" });
    }

    const sql = "SELECT * FROM users_info  WHERE name = ?";
    db.query(sql, [name], async (err, results) => {
      if (err) {
        console.error("DB error:", err);
        return res.status(500).json({ success: false, message: "Database error" });
      }

      if (results.length === 0) {
        return res.json({ success: false, message: "Invalid name or password" });
      }

      const user = results[0];
      console.log("password" , password );
      console.log("user.password" , user.password);
      
      if (password === user.password) {
        return res.json({ success: true, message: "Login successful" });
      } else {
        return res.json({ success: false, message: `Password${user.password} + user.password${user.password}` });
      }
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


// Start server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
