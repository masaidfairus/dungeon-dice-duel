import { getDb } from "../db/db.js"

async function createTable() {
  const db = await getDb()
  
  await db.exec(`
      CREATE TABLE heroes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        attack_power INTEGER NOT NULL,
        defense_power INTEGER NOT NULL,
        max_hp INTEGER NOT NULL,
        image_url TEXT NOT NULL
      )
    `)

  await db.exec(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

  await db.exec(`
      CREATE TABLE runs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        total_battles  DEFAULT 0,
        wins  DEFAULT 0,
        losses  DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `)

  await db.close()
}

createTable()