import { getDb } from '../db/db.js';
import bcrypt from "bcrypt";

export async function registerUser(req, res) {
  let {name, username, password} = req.body

  if (!name || !username || !password) {
    return res.status(400).json({ error: "All fields are required." })
  }

  name = name.trim()
  username = username.trim()

  try {
    const db = await getDb()
    const exists = await db.get(`SELECT id FROM users WHERE username = ?`, [username])
    
    if(exists) {
      return res.status(400).json({ error: "Username already in use." })
    }

    if (!/^[a-zA-Z0-9_-]{1,20}$/.test(username)) {
      return res.status(400).json({ error: "Username must be 1–20 characters, using letters, numbers, _ or -." })
    }

    password = await bcrypt.hash(password, 10)

    const user = await db.run(`INSERT INTO users (name, username, password) VALUES (?,?,?)`, [name, username, password])
    req.session.userId = user.lastID

    return res.status(201).json({ message: "User registered" })
  } catch (err) {
    return res.status(500).json({ error: "Registration failed. Please try again.", message: err.message })
  }
}

export async function loginUser(req, res) {
  let {username, password} = req.body

  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required." })
  }

  username = username.trim()

  try {
    const db = await getDb()

    const user = await db.get('SELECT * FROM users WHERE username = ?', [username])
    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    req.session.userId = user.id
    res.json({ message: "Logged in" })

  } catch (err) {
    return res.status(500).json({ error: "Login failed. Please try again.", message: err.message })
  }
}

export async function logoutUser(req, res) {
  req.session.destroy( () => {
    res.json({ message: "Logged out" })
  })
}
