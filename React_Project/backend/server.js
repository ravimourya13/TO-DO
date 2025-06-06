const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');              // ✅ Added
const cookieParser = require('cookie-parser');           // ✅ Added

const app = express();

// ✅ Setup cookie parser
app.use(cookieParser());

// ✅ Allow frontend to send cookies
app.use(cors({
  origin: "http://localhost:5173", // Your Vite frontend
  credentials: true
}));

// ✅ Setup express-session
app.use(
  session({
    secret: 'your-secret-key',     // Replace with a secure key or use .env
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,               // Set to true only in production with HTTPS
      maxAge: 1000 * 60 * 60       // 1 hour
    }
  })
);

app.use(bodyParser.json());
app.use(express.json());


// MySQL connection
const db = mysql.createConnection({
  host: '192.168.31.89',
  user: 'ravi',
  password: 'ravi@123',
  database: 'ToDo',
  port: 3306
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
  const { name, phone, email, password } = req.body;
  const sql = 'INSERT INTO user_info (name, phone, email_id, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, phone, email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Registration failed');
    }
    res.send('User registered successfully');
  });
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).json({ success: false, message: "Name and password required" });
    }

    const sql = "SELECT * FROM user_info WHERE name = ?";
    db.query(sql, [name], async (err, results) => {
      if (err) {
        console.error("DB error:", err);
        return res.status(500).json({ success: false, message: "Database error" });
      }

      if (results.length === 0) {
        return res.json({ success: false, message: "Invalid name or password" });
      }

      const user = results[0];
      if (password === user.password) {
        // ✅ Save user info in session
        req.session.user = { id: user.id, name: user.name };
        return res.json({ success: true, message: "Login successful" });
      } else {
        return res.json({ success: false, message: "Incorrect password" });
      }
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Check session
app.get("/api/session", (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
});

// ✅ Logout
app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
});

// Admin Panel - Add new admin
app.post("/api/admins", (req, res) => {
  const { name, phone, email_id, password } = req.body;

  if (!name || !phone || !email_id || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO admin_info (name, phone, email_id, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, phone, email_id, password], (err, result) => {
    if (err) {
      console.error("Error inserting admin:", err);
      return res.status(500).json({ error: "Database error" });
    }

    // ✅ Save admin info in session after registration
    req.session.user = { id: result.insertId, name };
    res.status(200).json({ message: "Admin added successfully", adminId: result.insertId });
  });
});


// yaha pr task kaa code likh dena uppr reffer kr lee register aur login kaa same waise he hoga bas thoda 
// bohat changes hoga gpt say puch ho jayega 


// Start server
app.listen(5000, '0.0.0.0', () => {
  console.log('Server running on port 5000');
});
